import React from 'react'
import { connect } from 'react-redux'
import gql from 'graphql-tag'
import ListPage from '../components/ListPage'
import { updateResults } from '../actions'

let queryByLoot = gql`
  query listGesturesByLootPhase($search: String!) {
    Bloodborne_listGesture(
      filter: {
        node: {
          lootUnion: {
            connectEncounter: { firstAvailablePhase: { name: { eq: $search } } }
          }
        }
      }
    ) {
      edges {
        node {
          name
        }
      }
    }
  }
`
let queryByReward = gql`
  query listGesturesByRewardPhase($search: String!) {
    Bloodborne_listGesture(
      filter: {
        node: {
          rewardFrom: {
            node: { firstAvailablePhase: { name: { eq: $search } } }
          }
        }
      }
    ) {
      edges {
        node {
          name
        }
      }
    }
  }
`

const mapStateToProps = state => ({
  currentResults: state.currentResults,
  description:
    'Select a game phase to view each gesture that first becomes available in that phase',
  query: queryByReward,
  queryType: 'Bloodborne_listGesture',
  page: 'Gestures',
  buttons: ['Evening', 'Night', 'Blood Moon', 'End of the Dream'],
  results: state.currentResults.map((x, i) => {
    let encounter = x.node.rewardFrom.edges[0].node
    return (
      <div className='col-6 col-md-4' key={i}>
        <div className='card border-dark'>
          <div className='card-header bg-dark text-white'>
            <h5>{x.node.name}</h5>
            <p>
              Obtained from {encounter.target.name} in {encounter.location.name}
            </p>
          </div>
          <div className='card-body'>
            <p>{encounter.name}</p>
            <small>
              Step {encounter.step} of {encounter.quest.name}
            </small>
            <small className='d-block'>
              First available during {encounter.firstAvailablePhase.name}
            </small>
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
