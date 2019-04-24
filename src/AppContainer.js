import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {  updateResults } from "../actions";

const mapDispatchToProps = (dispatch) => ({
  updateResults: (stuff) => {
    dispatch(updateResults(stuff))
  }
})

export default connect(null,mapDispatchToProps)(App);
