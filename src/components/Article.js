import React, { Component } from 'react'

export default class Article extends Component {
  
  miCucho = () => {
    this.props.addFavorite(this.props.title)
  }

  render() {
    const { title } = this.props
    return (
      <article className="article-item" id="article-template">
        <div className="image-wrap">
          <img src="assets/images/paisaje.jpg" alt="Paisaje" />
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
