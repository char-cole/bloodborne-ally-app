import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import DocsContainer from './containers/DocsContainer'
import RunesPageContainer from './containers/RunesPageContainer'
import GesturesPageContainer from './containers/GesturesPageContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <div id="wrapper">
            <nav
              className="container navbar navbar-inverse navbar-fixed-top bg-light border-bottom"
              role="navigation"
            >
              <h1>Bloodborne Ally</h1>
              <Link to="/">Home</Link>
              <Link to="/runes">Rune Search</Link>
              <Link to="/gestures">Gesture Search</Link>
            </nav>
            <div className="container bg-light pt-3" style={{minHeight: "100vh"}}>
              <Switch>
                <Route path="/gestures" component={GesturesPageContainer} />
                <Route path="/runes" component={RunesPageContainer} />
                <Route exact path="/" component={DocsContainer} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
