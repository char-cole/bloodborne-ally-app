import React from 'react'
import { connect } from "react-redux";
import SearchPage from "../components/SearchPage";
import SearchGesturesContainer from './SearchGesturesContainer';
import {  updateResults } from "../actions";

updateResults([]);

const mapDispatchToProps = (dispatch) => ({
  updateResults: (stuff) => {
    dispatch(updateResults(stuff))
  }
})

const mapStateToProps = (state) => ({
  searchFor: <SearchGesturesContainer></SearchGesturesContainer>,
  page: "Gestures",
	results: state.currentResults.map((x,i) => {
    console.log(x)
    let encounter = x.node.rewardFrom.edges[0].node;
    return (
      <div className="col-6 col-md-4" key={i}>
        <div className="card border-dark">
          <div className="card-header bg-dark text-white">
            <h5>{x.node.name}</h5>
            <p>Obtained from {encounter.target.name} in {encounter.location.name}</p>
          </div>
          <div className="card-body">
            <p>{encounter.name}</p>
            <small>Step {encounter.step} of {encounter.quest.name}</small>
            <small className="d-block">First available during {encounter.firstAvailablePhase.name}</small>
          </div>
        </div>
      </div>
    )
  })
});

export default connect(mapStateToProps,mapDispatchToProps)(SearchPage);