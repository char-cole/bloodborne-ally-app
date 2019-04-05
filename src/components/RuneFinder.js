import React, { Component } from 'react';
import { Query, ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";

class RuneFinder extends Component {
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
          effect
        }
      }
    }
  }`

  render() {
    return(
      <div className="container bg-light" style={{minHeight:"100vh"}}>
        <header className="p-3 text-left">
          <h2 className="font-weight-bold">
            Bloodborne Ally | Runes
          </h2>
          <h5 className="pr-5">
            Search for runes by name.
          </h5>
        </header>
        <input type="text"
          value={this.props.searchString}
          onChange={(e) => this.props.updateSearch(e.target.value)}
        ></input>
        <ApolloConsumer>
          {client => (
            <button className="btn btn-secondary"
              onClick={async () => {
                const { data } = await client.query({
                  query: this.searchRunes,
                  variables: {"search": this.props.searchString}
                });
                console.log(data);
                this.props.updateResults(data.Bloodborne_listRune.edges);
                console.log(this.props.currentResults)
              }}
            >
              Search for runes
            </button>
          )}
        </ApolloConsumer>
        <div className="row mt-5">
          {this.props.currentResults.map((x,i) => {
            return (
              <div className="col-3" key={i}>
                <button className="btn">{x.node.name}</button>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default RuneFinder;