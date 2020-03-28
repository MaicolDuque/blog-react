import React, { Component } from 'react'
import Article from './Article'
import Slider from './Slider'
import Sidebar from './Sidebar'
import axios from 'axios'

export default class Blog extends Component {

  state = {
    favorito: '',
    articles: {},
    status: ''
  }

  componentWillMount(){
    this.getArticles();
  }

  getArticles = () => {
    axios.get("http://localhost:3900/api/articles")
    .then(res => {    
      this.setState({
        articles: res.data.articles,
        status: 'success'
      })      
    })
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
              
              {this.state.status == "success" &&
                this.state.articles.map((article, i) => {
                  return (
                    <Article key={i} title={article.title} image={article.image} addFavorite={this.articleFavorite} />
                  )
                })
              }
             
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
