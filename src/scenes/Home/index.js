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
        {/*<Card
          new={this.props.news[0]} />*/}
        { this.props.news.map(n => <Card key={ n.id } new={ n } />) }
      </div>
    )
  }
}
