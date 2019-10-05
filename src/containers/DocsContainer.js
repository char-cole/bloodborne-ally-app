import {
	connect
} from "react-redux";
import Docs from "../components/Docs";

const mapStateToProps = (state) => ({
	allTypes: state.allTypes,
	allDocs: state.allDocs
});

export default connect(mapStateToProps)(Docs);