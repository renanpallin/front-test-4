import React from 'react';

export default class News extends React.Component {
  render() {
    // const singleNew = this.props.news.find(n => n.id === parseInt(this.props.match.params.id)) || {};
    // console.log(singleNew);
    const { singleNew } = this.props;
    return (
      <div className="single-new">
        <img className="border-and-shadow" src={singleNew.image_large} alt={ singleNew.txt_resume } />
        <h2>{singleNew.category}</h2>
        <p>{singleNew.txt_full}</p>
      </div>
    )
  }
}
