import React from 'react'
import { connect } from 'react-redux'
import gql from 'graphql-tag'
import ListPage from '../components/ListPage'
import { updateResults } from '../actions'

let query = gql`
  query listChalicesByType($search: String!) {
    Bloodborne_listKeyItem(
      filter: { node: { isChalice: true, name: { contains: $search } } }
    ) {
      edges {
        node {
          name
          pickUp {
            name
          }
          droppedByBoss {
            edges {
              node {
                name
                location {
                  name
                }
                quickestRoute {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`

const mapStateToProps = state => ({
  currentResults: state.currentResults,
  description:
    'Select a dungeon location to view each chalice connected to that realm',
  query,
  queryType: 'Bloodborne_listKeyItem',
  page: 'Chalices',
  buttons: ['Pthumeru', 'Hintertomb', 'Loran', 'Isz'],
  results: state.currentResults.map((x, i) => {
    let source
    let location
    if (x.node.droppedByBoss.edges[0]) {
      let boss = x.node.droppedByBoss.edges[0].node
      source = boss.name.split(' (')[0]
      location = boss.location.name
    } else if (x.node.pickUp) {
      if (x.node.isChalice) {
        source = 'Chalice Bath Messengers'
      } else source = 'exploration or interaction'
      location = x.node.pickUp.name
    } else {
      source = 'an unknown source. This is probably given by a quest.'
      location = 'an unknown location.'
    }
    return (
      <div className='col-6 col-md-4 mb-3' key={i}>
        <div className='card border-dark'>
          <div className='card-header bg-dark text-white'>
            <h5>{x.node.name}</h5>
            <p>
              <i>Found in</i>
              <br />
              {location}
            </p>
          </div>
          <div className='card-body'>
            <p>Acquired from {source}</p>
          </div>
        </div>
      </div>
    )
  })
})

const mapDispatchToProps = dispatch => ({
  updateResults: stuff => {
    dispatch(updateResults(stuff))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPage)
