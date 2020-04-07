import React, { Component } from 'react'
import Slider from './Slider'
import Sidebar from './Sidebar'
import Article from './Article'
import axios from 'axios'
import global from '../global'

export default class Home extends Component {
  state = {
    favorito: '',
    articles: [],
    success: ''
  }
  url = global.url

  articleFavorite = (m) => {
    console.log("Aca mijo.." + m)

    this.setState({
      favorito: m
    })

  }

  getLastArticles = () => {
    axios.get(`${this.url}articles/last/5`)
    .then(res => {         
      this.setState({
        articles: res.data.articles,
        status: 'success'
      })      
    })
  }

  componentWillMount(){
    this.getLastArticles();
  }


  render() {
    let buttonString = "Ir al blog";
    let articles;
    if(this.state.articles.length > 0){
      articles = (
        this.state.articles.map((article, i) => {
          return (
            <Article key={i} date={article.date} title={article.title}  image={article.image}  addFavorite={this.articleFavorite} />
          )
        })
      )
    }else if(this.state.articles.length === 0 && this.state.status === 'success'){
      articles = (
        <h2>No hay articulos para mostrar!</h2>
      )
    }else{
      articles = (
        <h2>Cargando...</h2>
      )
    }
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
              {articles}              
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
