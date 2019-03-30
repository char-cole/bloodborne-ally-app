import App from "./App";
import "./App.css";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  searchString: state.searchString
}

export default connect(mapStateToProps,null)(App);
