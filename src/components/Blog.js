import React, { Component } from 'react'
import Article from './Article'
import Slider from './Slider'
import Sidebar from './Sidebar'

export default class Blog extends Component {

  state = {
    favorito: ''
  }

  articleFavorite = (m) => {
    console.log("Aca mijo.." + m)

    this.setState({
      favorito: m
    })

  }
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
