import { connect } from "react-redux";
import GesturesPage from "../components/GesturesPage";

const mapStateToProps = (state) => ({
    currentResults: state.currentResults
});

export default connect(mapStateToProps)(GesturesPage);