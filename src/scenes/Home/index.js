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
    let {
      page,
      categoryFilter,
      itensByPage
    } = this.state;
    const { news } = this.props;

    ++page;

    const filteredNews = categoryFilter ? news.filter(n => n.category === categoryFilter) : news;
    const numberOfPages = Math.ceil(filteredNews.length / itensByPage);
    if (page > numberOfPages)
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

  onChooseCategoryFilter(e) {
    this.isSelectOptionsOpen.checked = false;
    this.selectLabel.innerText = e.target.parentNode.innerText;
    this.setState({ page: 1 });
    this.setState({ categoryFilter: e.target.value });
  }

  render() {
    const { itensByPage, page } = this.state;
    const { news } = this.props;
    const filteredNews = this.state.categoryFilter ? news.filter(n => n.category === this.state.categoryFilter) : news;

    const numberOfPages = Math.ceil(filteredNews.length / itensByPage);
    const newsOfCurrentPage = filteredNews.slice(itensByPage * (page -1), itensByPage * page);
    const cards = newsOfCurrentPage.map((n, i) => <Card key={ n.id } new={ n } />);

    let categories = new Set(news.map(n => n.category));

    return (
      <div>
        <div className="header">
          <div className="filter-wrapper">
            <div className="select">
              <input
                ref={el => this.isSelectOptionsOpen = el}
                type="checkbox"
                id="toggle"
                className="toggle" />
                <label
                  ref={el => this.selectLabel = el}
                  htmlFor="toggle">
                  Selecione uma categoria
                </label>
              <ul>
                {
                  Array.from(categories).map(category => (
                    <li key={category} className="select-option">
                      <label>
                        <input
                          type="radio"
                          name="choice"
                          value={category}
                          onClick={e => this.onChooseCategoryFilter(e)} />
                        {category}
                      </label>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
        <div className="header-push"></div>
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
