import React from 'react';
import HomePage from './Components/Homepage/Homepage'
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Router, Redirect } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <main>
          <Route exact path='/' component={HomePage}/>
        </main>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
