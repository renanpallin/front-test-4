import React from 'react';

export default class News extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>News</h1>
        <h4>{this.props.match.params.id}</h4>
      </div>
    )
  }
}
