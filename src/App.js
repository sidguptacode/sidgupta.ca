import React, { Component } from 'react';
import logo from './logo.svg';
import HomePage from './Components/Homepage'
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Router, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Switch>
            <Route exact path='/' component={HomePage}/>
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
