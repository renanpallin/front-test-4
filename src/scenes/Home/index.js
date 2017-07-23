import React from 'react';

import Card from './components/Card';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <Card
          new={this.props.news[0]} />
        { /*this.props.news.map(n => <h1>{n.id}</h1>) */}
      </div>
    )
  }
}
