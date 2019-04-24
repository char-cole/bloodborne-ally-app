import React, { Component } from 'react';
import PageHeader from "./PageHeader.js"
import NothingContainer from '../containers/NothingContainer.js';

class SearchPage extends Component {
  render() {
    return(
      <div>
        <PageHeader page={this.props.page}></PageHeader>
        {this.props.searchFor}
        <div className="row mt-5">
          <NothingContainer/>
          {this.props.results}
        </div>
      </div>
    )
  }
}

export default SearchPage;