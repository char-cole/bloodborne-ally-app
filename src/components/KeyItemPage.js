import React, { Component } from 'react';
import PageHeader from "./PageHeader.js"
import SearchKeyItemsContainer from '../containers/SearchKeyItemsContainer.js';

class GestureFinder extends Component {
  render() {
    return(
      <div>
        <PageHeader page="Chalice" description="Find Chalices by name"/>
        <SearchKeyItemsContainer/>
        <button onClick={()=> {
          if(this.props.chaliceCheck) {
            this.props.toggleChalice(true)
          } else this.props.toggleChalice(false)
        }}>Toggle chalices</button>
        <div className="row mt-5">
          {this.props.currentResults.map((x,i) => {
            let source;
            let location;
            if(x.node.droppedByBoss.edges[0]) {
              let boss = x.node.droppedByBoss.edges[0].node
              source = boss.name.split(' (')[0];
              location = boss.location.name;
            }
            else if(x.node.pickUp.name) {
              source = "Chalice Bath Messengers";
              location = x.node.pickUp.name;
            }
            else {
              source = "an unknown source. Curious.";
              location = "an unknown location."
            }
            return (
              <div className="col-6 col-md-4 mb-3" key={i}>
                <div className="card border-dark">
                  <div className="card-header bg-dark text-white">
                    <h5>
                      {x.node.name}
                    </h5>
                    <p>
                      <i>Found in</i><br/>
                      {location}
                    </p>
                  </div>
                  <div className="card-body">
                    <p>Acquired from {source}</p>
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