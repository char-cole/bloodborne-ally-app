import { connect } from "react-redux";
import RuneFinder from "../components/RuneFinder";
import { updateSearch, updateResults } from "../actions";

const mapStateToProps = (state) => ({
    searchString: state.searchString,
    currentResults: state.currentResults
});

const mapDispatchToProps = (dispatch) => ({
  updateSearch: (search) => {
    dispatch(updateSearch(search))
  },
  updateResults: (stuff) => {
    dispatch(updateResults(stuff))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(RuneFinder);