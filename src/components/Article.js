import React, { Component } from 'react'

export default class Article extends Component {
  
  miCucho = () => {
    this.props.addFavorite(this.props.title)
  }

  render() {
    const { title, image } = this.props
    return (
      <article className="article-item" id="article-template">
        <div className="image-wrap">
          <img src={image} alt={title} />
        </div>

        <h2>{title}</h2>
        <span className="date">
          Hace 5 minutos..
          </span>
        <a href="">Leer más..</a>
        <button onClick={this.miCucho}>OE</button>
        <div className="clearfix"></div>
      </article>
    )
  }
}
