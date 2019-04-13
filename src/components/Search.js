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
          <button className="btn btn-secondary border border-white ml-2"
            onClick={async () => {
              const { data } = await client.query({
                query: props.query,
                variables: {"search": capitalize(props.searchString)}
              });
              console.log(data);
              props.updateResults(data[props.queryType].edges);
              console.log(data[props.queryType].edges)
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