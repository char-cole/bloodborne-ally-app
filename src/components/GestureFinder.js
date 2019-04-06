import React, { Component } from 'react';
import { ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";
import PageHeader from "./PageHeader.js"

class GestureFinder extends Component {
  page = "Gesture";
  search = gql`query listThese($search: String!) {
    Bloodborne_listGesture(filter: {
      node: {
        name: {
          contains: $search
        }
      }
    }) {
      edges {
        node {
          name
          rewardFrom {
            edges {
              node {
                name
                quest {
                  name
                }
                step
                location {
                  name
                }
                firstAvailablePhase {
                  name
                }
                target {
                  name
                }
              }
            }
          }
        }
      }
    }
  }`

  capitalize = (searchEntry) => {
    let searchArray = searchEntry.trim().split(' ').map(x => {
      return x[0].toUpperCase() + x.slice(1).toLowerCase()
    });
    console.log(searchArray)
    return searchArray.join(' ')
  }

  render() {
    return(
      <div>
        <PageHeader page={this.page} description="Find Gestures by name"></PageHeader>
        <div className="row my-3 mx-0">
          <input type="text"
            className="w-50 rounded px-1"
            value={this.props.searchString}
            onChange={(e) => this.props.updateSearch(e.target.value)}
          ></input>
          <ApolloConsumer>
            {client => (
              <button className="btn btn-secondary"
                onClick={async () => {
                  const { data } = await client.query({
                    query: this.search,
                    variables: {"search": this.capitalize(this.props.searchString)}
                  });
                  console.log(data);
                  this.props.updateResults(data.Bloodborne_listGesture.edges);
                }}
              >
                Search
              </button>
            )}
          </ApolloConsumer>
        </div>
        <div className="row mt-5">
          {this.props.currentResults.map((x,i) => {
            let encounter = x.node.rewardFrom.edges[0].node;
            console.log(encounter)
            return (
              <div className="col-6 col-md-4" key={i}>
                <div className="card">
                  <div className="card-header">
                    <h5>{x.node.name}</h5>
                    <p>Obtained from {encounter.target.name} in {encounter.location.name}</p>
                  </div>
                  <div className="card-body">
                    <p>{encounter.name}</p>
                    <small>Step {encounter.step} of {encounter.quest.name}</small>
                    <small className="d-block">First available during {encounter.firstAvailablePhase.name}</small>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default GestureFinder;