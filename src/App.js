import React from 'react';
import './scss/App.css';

import {
  Route,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom'

import * as Scenes from './scenes';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      news: []
    };
  }

  componentDidMount() {
    fetch('https://api.myjson.com/bins/a56hd')
      .then(response => response.json())
      .then(news => this.setState({ news }));
  }

  render() {
    window.news = this.state.news;
    return (
      <div className="App">
        <Router>
          <div>
            <Route
              path='/'
              exact
              render={props => (
                <Redirect to='/home'/>
              )} />
            <Route
              path='/home'
              render={props => (
                <Scenes.Home
                  {...props}
                  news={this.state.news} />
              )} />
            <Route
              path='/news/:id'
              render={props => (
                <Scenes.News
                  {...props}
                  news={this.state.news}
                  singleNew={
                    this.state.news.find(
                      n => n.id === parseInt(props.match.params.id, 10)
                    ) || {}
                  }
                   />
              )} />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
