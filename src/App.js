import React, { Component } from 'react';
import DocsContainer from './containers/DocsContainer'
import RuneFinderContainer from './containers/RuneFinderContainer'
import GestureFinderContainer from './containers/GestureFinderContainer'
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/build">
        <div>
          <div id="wrapper">
            <nav
              className="container navbar navbar-inverse navbar-fixed-top bg-light border-bottom"
              role="navigation"
            >
              <h1>Bloodborne Ally</h1>
              <a href='/'>Home</a>
              <a href='/rune'>Rune Search</a>
              <a href='/gesture'>Gesture Search</a>
            </nav>
            <div className="container bg-light pt-3" style={{minHeight: "100vh"}}>
              <Switch>
                <Route path="/gesture" component={GestureFinderContainer} />
                <Route path="/rune" component={RuneFinderContainer} />
                <Route path="/" component={DocsContainer} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
