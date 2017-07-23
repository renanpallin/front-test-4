import React from 'react';
import './App.css';

import {
  Switch,
  Route,
  Link,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom'

import * as Scenes from './scenes';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>oiê</h1>
        <Router>
          <div>
            <Route
              path='/'
              exact
              component={Scenes.Home} />
            <Route
              path='/news/:id'
              component={Scenes.News} />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
