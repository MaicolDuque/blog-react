import React, { Component } from 'react'
import Slider from './Slider'
import Sidebar from './Sidebar'
import Article from './Article'

export default class Home extends Component {
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
    let buttonString = "Ir al blog";
    return (
      <div id="home">
        <Slider
          title="Bienvenido a Mi Blog pana"
          btn={buttonString}
          size="slider-big"
        />
        <div className="center">
          <section id="content">
            <h2 className="sub-header">Últimos articulos</h2>
            <div>Articulo favorito: </div><span>{this.state.favorito}</span>
            <div className="articles">
              <Article title="titulo de prueba" addFavorite={this.articleFavorite} />
            </div>
          </section>
          <Sidebar            
          />
          <div className="clearfix"></div>
        </div>
      </div>
    )
  }
}
