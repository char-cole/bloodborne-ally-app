import { connect } from "react-redux";
import RunesPage from "../components/RunesPage";

const mapStateToProps = (state) => ({
	currentResults: state.currentResults
});

export default connect(mapStateToProps)(RunesPage);