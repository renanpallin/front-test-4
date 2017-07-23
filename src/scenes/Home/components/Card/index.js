import React from 'react';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { new : singleNew } = this.props;
    if (!singleNew) return null;

    return (
      <div className="card">
        <img src={ singleNew.image_thumb } alt={ singleNew.txt_resume } />
        <div className="card-description">
          <h3>{ singleNew.category }</h3>
          <p>{ singleNew.txt_resume }</p>
          <a href={`/news/${ singleNew.id }`}>{ singleNew.txt_button }</a>
        </div>
      </div>
    )
  }
}
