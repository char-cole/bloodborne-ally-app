import { connect } from "react-redux";
import Docs from "../components/Docs";

const mapStateToProps = (state) => ({
	allTypes: state.allTypes
});

export default connect(mapStateToProps)(Docs);