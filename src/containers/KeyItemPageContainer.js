import { connect } from "react-redux";
import KeyItemPage from "../components/KeyItemPage";
import { toggleChalice } from "../actions";

const mapStateToProps = (state) => ({
    currentResults: state.currentResults
});

const mapDispatchToProps = (dispatch) => ({
    toggleChalice: (toggle) => {
      dispatch(toggleChalice(toggle))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(KeyItemPage);