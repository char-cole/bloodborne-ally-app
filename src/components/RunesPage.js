import React, { Component } from 'react';
import PageHeader from "./PageHeader.js"
import SearchRunesContainer from "../containers/SearchRunesContainer.js"

class RuneFinder extends Component {
  page = "Runes";

  render() {
    return(
      <div>
        <PageHeader page={this.page} description="Find Runes by name"></PageHeader>
        <SearchRunesContainer></SearchRunesContainer>
        <div className="row mt-5">
          {this.props.currentResults.map((x,i) => {
            // let encounter = x.node.droppedByNPC.edges[0].node;
            // console.log(encounter);
            let lineTwo;
            let name = x.node.name;
            if (x.node.isCovenant) lineTwo = "This is a covenant rune."
            else {
              lineTwo = "Tier "+x.node.tier;
              name = x.node.name.slice(0, x.node.name.indexOf(" "+x.node.tier.toString()))
            }
            return (
              <div className="col-6 col-md-4 mb-3" key={i}>
                <div className="card border-dark">
                  <div className="card-header bg-dark text-white">
                    <h5>{name}</h5>
                    <p>{lineTwo}</p>
                  </div>
                  <div className="card-body">
                    <p>{x.node.effect}</p>
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

export default RuneFinder;