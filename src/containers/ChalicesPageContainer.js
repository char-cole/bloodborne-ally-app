import { connect } from "react-redux";
import ChalicesPage from "../components/ChalicesPage";

const mapStateToProps = (state) => ({
    currentResults: state.currentResults
});

export default connect(mapStateToProps)(ChalicesPage);