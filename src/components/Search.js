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
    <div className="row my-3 mx-0">
      <input type="text"
        className="w-50 rounded px-1"
        value={props.searchString}
        onChange={(e) => props.updateSearch(e.target.value)}
      ></input>
      <ApolloConsumer>
        {client => (
          <button className="btn btn-light border border-dark ml-2"
            onClick={async () => {
              const { data } = await client.query({
                query: props.query,
                variables: {
                  "search": capitalize(props.searchString),
                  "chalice": props.chaliceCheck
                }
              });
              if(data[props.queryType].edges[0]) {
                console.log(data[props.queryType].edges);
                props.updateNothing("")
                props.updateResults(data[props.queryType].edges);
              }
              else props.updateNothing("No Key Item was found. Were you looking for a Chalice?")
            }}
          >
            Search
          </button>
        )}
      </ApolloConsumer>
    </div>
  )
}

export default Search;