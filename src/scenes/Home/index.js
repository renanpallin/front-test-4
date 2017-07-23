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

  nextPage(e) {
    let { page } = this.state;
    ++page;

    const { news } = this.props;
    const { itensByPage } = this.state;
    if (page > Math.ceil(news.length / itensByPage))
      return;

    this.setState({ page });
  }

  previousPage(e) {
    let { page } = this.state;
    --page;
    if (page < 1)
      return;
    this.setState({ page });
  }

  goToPage(page){
    this.setState({ page });
  };

  render() {
    const { itensByPage, page } = this.state;
    const numberOfPages = Math.ceil(this.props.news.length / itensByPage);
    const newsOfCurrentPage = this.props.news.slice(itensByPage * (page -1), itensByPage * page);
    const cards = newsOfCurrentPage.map((n, i) => <Card key={ n.id } new={ n } />);

    return (
      <div>
        <h1>Home</h1>
        <div className="cards">
          { cards }
        </div>
        <div className="paginator">
          <ul>
            <li onClick={e => this.previousPage(e)}></li>
            {
              Array(numberOfPages)
                .fill()
                .map((undef, index) => (
                    <li
                      key={index + 1}
                      className={index === (this.state.page - 1) ? "active" : ""}

                      onClick={e => this.goToPage(index +1 )}>
                      <span>
                        {index + 1}
                      </span>
                    </li>
                  )
                )
            }
            <li onClick={e => this.nextPage(e)}></li>
          </ul>
        </div>
      </div>
    )
  }
}
