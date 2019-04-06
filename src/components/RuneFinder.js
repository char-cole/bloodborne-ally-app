import React, { Component } from 'react';
import { ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";
import PageHeader from "./PageHeader.js"

class RuneFinder extends Component {
  page = "Runes";
  searchRunes = gql`query getTheseRunes($search: String!) {
    Bloodborne_listRune(filter: {
      node: {
        name: {
          contains: $search
        }
      }
    }) {
      edges {
        node {
          id
          name
          tier
          effect
          isCovenant
          pickUp {
            name
          }
          droppedByNPC {
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
    let searchArray = searchEntry.split(' ').map(x => {
      return x[0].toUpperCase() + x.slice(1).toLowerCase()
    });
    return searchArray.join(' ')
  }

  render() {
    return(
      <div>
        <PageHeader page={this.page} description="Find Runes by name"></PageHeader>
        <div className="row my-3 mx-0">
          <input type="text"
            className="w-50 rounded px-1"
            value={this.props.searchString}
            onChange={(e) => this.props.updateSearch(e.target.value)}
          ></input>
          <ApolloConsumer>
            {client => (
              <button className="btn btn-secondary ml-2"
                onClick={async () => {
                  const { data } = await client.query({
                    query: this.searchRunes,
                    variables: {"search": this.capitalize(this.props.searchString)}
                  });
                  console.log(data);
                  this.props.updateResults(data.Bloodborne_listRune.edges);
                  // console.log(this.props.currentResults)
                }}
              >
                Search
              </button>
            )}
          </ApolloConsumer>
        </div>
        <div className="row mt-5">
          {this.props.currentResults.map((x,i) => {
            // let encounter = x.node.droppedByNPC.edges[0].node;
            // console.log(encounter);
            let lineTwo;
            let name = x.node.name;
            if (x.node.isCovenant) lineTwo = "This is a covenant rune."
            else {
              lineTwo = "Tier "+x.node.tier;
              name = x.node.name.slice(0, x.node.name.indexOf(" "+x.node.tier.toString()))
            }
            return (
              <div className="col-6 col-md-4 mb-3" key={i}>
                <div className="card">
                  <div className="card-header">
                    <h5>{name}</h5>
                    <p>{lineTwo}</p>
                  </div>
                  <div className="card-body">
                    <p>{x.node.effect}</p>
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

export default RuneFinder;