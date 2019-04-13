import React, { Component } from 'react';
import PageHeader from "./PageHeader.js"
import SearchGesturesContainer from '../containers/SearchGesturesContainer.js';

class GestureFinder extends Component {
  render() {
    return(
      <div>
        <PageHeader page="Gesture" description="Find Gestures by name"/>
        <SearchGesturesContainer/>
        <div className="row mt-5">
          {this.props.currentResults.map((x,i) => {
            let encounter = x.node.rewardFrom.edges[0].node;
            console.log(encounter)
            return (
              <div className="col-6 col-md-4" key={i}>
                <div className="card">
                  <div className="card-header">
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
          })}
        </div>
      </div>
    )
  }
}

export default GestureFinder;