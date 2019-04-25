import React from 'react';
import { ApolloConsumer } from "react-apollo";

const Search = (props) => {

  let capitalize = (searchEntry) => {
    let searchArray = searchEntry.split(' ').map(x => {
      return x[0].toUpperCase() + x.slice(1).toLowerCase()
    });
    return searchArray.join(' ')
  }

  return (
    <ApolloConsumer>
      {client => (
        <form className="row my-3 mx-0" onSubmit={async (event) => {
          event.preventDefault();
          const { data } = await client.query({
            query: props.query,
            variables: {
              "search": capitalize(props.searchString),
              "chalice": props.chaliceCheck
            }
          });
          props.updateResults(data[props.queryType].edges);
          console.log(data[props.queryType].edges);
          if(data[props.queryType].edges[0]) props.updateNothing("")
          else props.updateNothing(props.nothingResults)
        }}>
          <input type="text"
            className="w-50 rounded px-1"
            value={props.searchString}
            onChange={(e) => props.updateSearch(e.target.value)}
          ></input>
          <button className="btn btn-light border border-dark ml-2">
            Search
          </button>
          {props.searchOptions}
        </form>
      )}
    </ApolloConsumer>
  )
}

export default Search;