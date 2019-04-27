import Links from "../components/Links";
import { connect } from "react-redux";
import { updateResults } from "../actions";

const mapStateToProps = (state) => ({
  navLinks: state.navLinks
});

const mapDispatchToProps = (dispatch) => ({
  updateResults: (stuff) => {
    dispatch(updateResults(stuff))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Links);
