import { connect } from "react-redux";
import gql from "graphql-tag";
import Search from "../components/Search";
import { updateSearch, updateResults } from "../actions";

let query = gql`
  query searchGesturesByName($search: String!) {
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
  }
`

const mapStateToProps = (state) => ({
    searchString: state.searchString,
    currentResults: state.currentResults,
    query: query,
    queryType: "Bloodborne_listGesture"
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