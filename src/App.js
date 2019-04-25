import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import DocsContainer from './containers/DocsContainer';
import RuneSearchPageContainer from './containers/RuneSearchPageContainer';
import GestureSearchPageContainer from './containers/GestureSearchPageContainer';
import KeyItemSearchPageContainer from './containers/KeyItemSearchPageContainer';

let navLinks = [
  {url: "/", name: "Home"},
  {url: "/runes", name: "Rune Search"},
  {url: "/gestures", name: "Gesture Search"},
  {url: "/items", name: "Key Item Search"},
]

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
                {navLinks.map((x,i) => {
                  return (
                    <Link to={x.url} className="col-2 text-center" key={i}>
                      {x.name}
                    </Link>
                  )
                })}
              </div>
            </nav>
            <div className="container bg-light pt-3" style={{minHeight: "100vh"}}>
              <Switch>
                <Route path="/items" component={KeyItemSearchPageContainer} />
                <Route path="/gestures" component={GestureSearchPageContainer} />
                <Route path="/runes" component={RuneSearchPageContainer} />
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
