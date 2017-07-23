import React from 'react';

import Card from './components/Card';
import Paginator from './components/Paginator';

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
        <Paginator
          previousPage={e => this.previousPage(e)}
          goToPage={e => this.goToPage(e)}
          nextPage={e => this.nextPage(e)}
          numberOfPages={numberOfPages}
          page={page}
        />
      </div>
    )
  }
}
