import { connect } from "react-redux";
import SearchOptions from "../components/SearchOptions";
import { toggleChalice } from "../actions";

const mapStateToProps = (state) => ({
  chaliceCheck: state.chaliceCheck,
});

const mapDispatchToProps = (dispatch) => ({
  toggleChalice: (toggle) => {
    dispatch(toggleChalice(toggle))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchOptions);