import React, { Component } from 'react';
import './App.css';
import DocsContainer from './containers/DocsContainer'
// import RuneFinder from './components/RuneFinder'

class App extends Component {
  render() {
    return (
        <div className="App">
          <DocsContainer />
          <h1>{this.props.searchString}</h1>
        </div>
    );
  }
}

export default App;
