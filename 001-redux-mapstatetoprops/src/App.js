import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'

import AppTitle from './components/AppTitle'
import AppIntro from './components/AppIntro'
import SetTextBtn from "./components/SetTextBtn";

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <AppTitle />
          </header>

          <AppIntro />

          <hr/>
          <h4>Update Name</h4>
          <SetTextBtn field="name" text="Welcome to React" />
          <SetTextBtn field="name" text="Welcome to my world" />

          <h4>Update Intro</h4>
          <SetTextBtn field="intro" text="This is intro." />
          <SetTextBtn field="intro" text="This is intro number two." />
        </div>
      </Provider>
    );
  }
}

export default App;
