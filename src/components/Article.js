import React, { Component } from 'react'
import Moment from 'react-moment'
import 'moment/locale/es'
import { Link } from 'react-router-dom'

export default class Article extends Component {

  miCucho = () => {
    this.props.addFavorite(this.props.title)
  }

  render() {
    const { title, image, date, id } = this.props
    const dateToFormat = new Date(date);
    return (
      <article className="article-item" id="article-template">
        <div className="image-wrap">
          {image != null ? (
             <img src={image} alt={title} />
           ): (
             <img src="https://2.bp.blogspot.com/-o90r3ud0kfY/TdK1a9ICJcI/AAAAAAAAF8k/_E-9h3ZaM9k/s1600/nota-tutorial.png" alt="Article"></img>
           )
          }
         
        </div>

        <h2>{title}</h2>
        <span className="date">
          <Moment locale="es" fromNow date={dateToFormat} ></Moment>              
        </span>
        <Link to={"blog/article/"+id}>Leer más..</Link>        
        <div className="clearfix"></div>
      </article>
    )
  }
}
