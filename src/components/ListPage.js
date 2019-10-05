import React, { Component } from 'react'
import PageHeader from './PageHeader.js'
import { ApolloConsumer } from 'react-apollo'

class ListPage extends Component {
  componentWillUnmount() {
    this.props.updateResults([])
  }
  render() {
    return (
      <div>
        <PageHeader
          description={this.props.description}
          page={this.props.page}
        />
        <ApolloConsumer>
          {client => (
            <div className='row'>
              {this.props.buttons.map(x => {
                return (
                  <div className='col d-flex justify-content-center'>
                    <button
                      className='btn btn-outline-dark btn-wide'
                      onClick={async () => {
                        const { data } = await client.query({
                          query: this.props.query,
                          variables: { search: x }
                        })
                        this.props.updateResults(
                          data[this.props.queryType].edges
                        )
                      }}
                      //   async () => {
                      //   this.props.updateResults([])
                      //   const newResults = []
                      //   const { data } = await client.query({
                      //     query: this.props.query,
                      //     variables: { "search": x }
                      //   })
                      //   data[this.props.queryType].edges.map(d => newResults.push(d))
                      //   console.log('new results here:')
                      //   console.log(newResults)
                      //   this.props.updateResults(newResults)
                      // }}
                    >
                      {x}
                    </button>
                  </div>
                )
              })}
            </div>
          )}
        </ApolloConsumer>
        <div className='row mt-5'>{this.props.results}</div>
      </div>
    )
  }
}

export default ListPage
