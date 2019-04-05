import React, { Component } from 'react';
import DocsContainer from './containers/DocsContainer'
import RuneFinderContainer from './containers/RuneFinderContainer'

class App extends Component {
  render() {
    return (
        <div className="App">
          {/* <DocsContainer /> */}
          <RuneFinderContainer />
        </div>
    );
  }
}

export default App;
