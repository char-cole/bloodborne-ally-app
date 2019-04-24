import { connect } from "react-redux";
import Nothing from "../components/Nothing";

const mapStateToProps = (state) => ({
  nothing: state.nothing
});

export default connect(mapStateToProps)(Nothing);