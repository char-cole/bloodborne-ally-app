import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "https://bloodborne-ally-9834e999.us-east1.slicknode.com"
});

client
  .query({
    query: gql`
      {
        Bloodborne_getRuneByName(name: "Milkweed") {
          name
          id
          effect
          pickUp {
            name
            headstone {
              name
            }
          }
          source {
            name
          }
        }
      }
    `
  })
  .then(result => console.log(result));

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
