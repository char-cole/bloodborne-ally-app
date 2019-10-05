import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LinksContainer from './containers/LinksContainer';
import DocsContainer from './containers/DocsContainer';
import RuneSearchPageContainer from './containers/RuneSearchPageContainer';
import GestureSearchPageContainer from './containers/GestureSearchPageContainer';
import KeyItemSearchPageContainer from './containers/KeyItemSearchPageContainer';
import ListChalicesPageContainer from './containers/ListChalicesPageContainer';
import ListGesturesPageContainer from './containers/ListGesturesPageContainer';

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
              <h1>
                Bloodborne Ally
              </h1>
              <div className="row">
                <LinksContainer/>
              </div>
            </nav>
            <div className="container bg-light pt-3" style={{minHeight: "100vh"}}>
              <Switch>
                <Route path="/item-search" component={KeyItemSearchPageContainer} />
                <Route path="/gesture-search" component={GestureSearchPageContainer} />
                <Route path="/rune-search" component={RuneSearchPageContainer} />
                <Route path="/chalices" component={ListChalicesPageContainer} />
                <Route path="/gestures" component={ListGesturesPageContainer} />
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
