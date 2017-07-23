import React from 'react';

import Card from './components/Card';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      itensByPage: 6
    }
  }

  render() {
    const cards = this.props.news.map(n => <Card key={ n.id } new={ n } />);
    const { itensByPage, page } = this.state;
    const numberOfPages = Math.ceil(this.props.news.length / itensByPage);

    return (
      <div>
        <h1>Home</h1>
        <div className="cards">
          { cards.splice(itensByPage * (page - 1), itensByPage * page) }
        </div>
        <div className="paginator">
          <ul>
            {
              Array(numberOfPages)
                .fill()
                .map((undef, index) => (
                    <li key={index + 1}>
                      <span>
                        {index + 1}
                      </span>
                    </li>
                  )
                )
            }
          </ul>
        </div>
      </div>
    )
  }
}
