import { connect } from "react-redux";
import gql from "graphql-tag";
import Search from "../components/Search";
import { updateSearch, updateResults } from "../actions";

let query = gql`
query getTheseRunes($search: String!) {
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
}
`

const mapStateToProps = (state) => ({
    searchString: state.searchString,
    currentResults: state.currentResults,
    query: query,
    queryType: "Bloodborne_listRune"
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