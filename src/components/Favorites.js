import React, { Component } from 'react'
import Slider from './Slider'
import Sidebar from './Sidebar'
import Article from './Article'

export default class Favorites extends Component {
  render() {
    return (
      <div>
        <Slider
          title="Blog"
          size="slider-small"
        />
        <div className="center">
          <section id="content">
            <div className="articles">
              <Article title="titulo de prueba" addFavorite={this.articleFavorite} />
            </div>
          </section>
          <Sidebar
            blog="true"
          />
          <div className="clearfix"></div>
        </div>
      </div>
    )
  }
}
