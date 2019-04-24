import React, { Component } from 'react';
import PageHeader from "./PageHeader.js"
import SearchKeyItemsContainer from '../containers/SearchKeyItemsContainer.js';

class GestureFinder extends Component {
  render() {
    return(
      <div>
        <PageHeader page="Key Item" description="Find Key Items by name"/>
        <SearchKeyItemsContainer/>
        <label htmlFor="chaliceCheckBox" className="form-label mr-3">
          Search for Chalices?
        </label>
        <input if="chaliceCheckBox" type="checkbox" value={this.props.chaliceCheck} onChange={()=> {
          this.props.toggleChalice(this.props.chaliceCheck);
        }}>
        </input>
        <div className="row mt-5">
          <h5 className="col-12 m-0 text-center">
            {this.props.nothing}
          </h5>
          {
            this.props.currentResults.map((x,i) => {
              let source;
              let location;
              if(x.node.droppedByBoss.edges[0]) {
                let boss = x.node.droppedByBoss.edges[0].node
                source = boss.name.split(' (')[0];
                location = boss.location.name;
              }
              else if(x.node.pickUp) {
                if (x.node.isChalice) {
                  source = "Chalice Bath Messengers";
                } else source = "exploration or interaction"
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
                      <p>
                        Acquired from {source}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default GestureFinder;