import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import DocsContainer from './containers/DocsContainer';
import RunesPageContainer from './containers/RunesPageContainer';
import GesturesPageContainer from './containers/GesturesPageContainer';
import KeyItemPageContainer from './containers/KeyItemPageContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <div id="wrapper">
            <nav
              className="container navbar-fixed-top bg-light border-bottom"
              role="navigation"
            >
              <h1 className="w-100">
                Bloodborne Ally
              </h1>
              <div className="w-100">
                <Link to="/" className="col-2">
                  Home
                </Link>
                <Link to="/runes" className="col-2">
                  Rune Search
                </Link>
                <Link to="/gestures" className="col-2">
                  Gesture Search
                </Link>
                <Link to="/items" className="col-2">
                  Key Item Search
                </Link>
              </div>
            </nav>
            <div className="container bg-light pt-3" style={{minHeight: "100vh"}}>
              <Switch>
                <Route path="/items" component={KeyItemPageContainer} />
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
