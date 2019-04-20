import { connect } from "react-redux";
import gql from "graphql-tag";
import Search from "../components/Search";
import { updateSearch, updateResults } from "../actions";

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
    chaliceCheck: state.chaliceCheck
});

const mapDispatchToProps = (dispatch) => ({
  updateSearch: (search) => {
    dispatch(updateSearch(search))
  },
  updateResults: (stuff) => {
    dispatch(updateResults(stuff))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Search);