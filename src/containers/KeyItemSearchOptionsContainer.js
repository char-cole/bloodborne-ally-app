import { connect } from "react-redux";
import KeyItemSearchOptions from "../components/KeyItemSearchOptions";
import { toggleChalice } from "../actions";

const mapStateToProps = (state) => ({
  toggleChalice: state.toggleChalice,
  chaliceCheck: state.chaliceCheck
});

const mapDispatchToProps = (dispatch) => ({
  toggleChalice: (toggle) => {
    dispatch(toggleChalice(toggle))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(KeyItemSearchOptions);