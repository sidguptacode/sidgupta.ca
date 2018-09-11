import React, { Component } from 'react';
import logo from './logo.svg';
import HomePage from './Components/Homepage'
import ProjectsPage from './Components/Projectspage'
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Router, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Switch>
            <Route exact path='/' component={Main}/>
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

class Main extends Component {
  render() {
    return(
      <div>
        <HomePage/>
        <ProjectsPage/>
      </div>
    );
  }
}

export default App;
