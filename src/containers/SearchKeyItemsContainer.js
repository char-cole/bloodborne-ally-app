import { connect } from "react-redux";
import gql from "graphql-tag";
import Search from "../components/Search";
import { updateSearch, updateResults, updateNothing } from "../actions";

let query = gql`
  query searchChalicesByName($search: String!, $chalice: Boolean!) {
    Bloodborne_listKeyItem(filter: {
      node: {
        isChalice: $chalice,
        name: {
          contains: $search
        }
      }
    }) {
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

const mapStateToProps = (state) => ({
  searchString: state.searchString,
  currentResults: state.currentResults,
  query: query,
  queryType: "Bloodborne_listKeyItem",
  chaliceCheck: state.chaliceCheck,
  nothingResults: "No Key Items found. Make sure Chalices are toggled on if searching for a Chalice."
});

const mapDispatchToProps = (dispatch) => ({
  updateSearch: (search) => {
    dispatch(updateSearch(search))
  },
  updateResults: (stuff) => {
    dispatch(updateResults(stuff))
  },
  updateNothing: (nothing) => {
    dispatch(updateNothing(nothing))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Search);