import React, { Component } from 'react'
import Article from './Article'
import Slider from './Slider'
import Sidebar from './Sidebar'
import axios from 'axios'
import global from '../global'

export default class Blog extends Component {

  state = {
    favorito: '',
    articles: [],
    status: ''
  }

  url = global.url
  
  getArticles = () => {
    axios.get(`${this.url}articles`)
    .then(res => {    
      this.setState({
        articles: res.data.articles,
        status: 'success'
      })      
    })
  }

  componentWillMount(){
    this.getArticles();
  }

  

  articleFavorite = (m) => {
    console.log("Aca mijo.." + m)

    this.setState({
      favorito: m
    })

  }
  render() {  
    let articles;
    if(this.state.articles.length > 0){
      articles = (
        this.state.articles.map((article, i) => {
          return (
            <Article key={i} date={article.date} title={article.title} id={article._id} image={article.image}  addFavorite={this.articleFavorite} />
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
      <div>
        <Slider
          title="Blog" 
          size="slider-small"         
        />
        <div className="center">
          <section id="content">           
            <div className="articles">
              
              {articles}
             
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
