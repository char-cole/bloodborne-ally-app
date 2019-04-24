import React from 'react'
import { connect } from "react-redux";
import SearchPage from "../components/SearchPage";
import SearchRunesContainer from "../containers/SearchRunesContainer.js"

const mapStateToProps = (state) => ({
  searchFor: <SearchRunesContainer></SearchRunesContainer>,
  page: "Runes",
	results: state.currentResults.map((x,i) => {
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
  })
});

export default connect(mapStateToProps)(SearchPage);