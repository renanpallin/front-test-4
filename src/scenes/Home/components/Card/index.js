import React from 'react';
import { Link } from 'react-router-dom'

export default class Card extends React.Component {
  render() {
    const { new : singleNew } = this.props;
    if (!singleNew) return null;

    return (
      <div className="card-wrapper">
        <div className="card border-and-shadow">
          <div className="img-wrapper">
            <img src={ singleNew.image_thumb } alt={ singleNew.txt_resume } />
          </div>
          <div className="card-description">
            <h3>{ singleNew.category }</h3>
            <p>{ singleNew.txt_resume }</p>
            <Link className="btn hoverable" to={`/news/${ singleNew.id }`}>{ singleNew.txt_button }</Link>
          </div>
        </div>
      </div>
    )
  }
}
