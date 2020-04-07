import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Error from './components/Error'
import Formulario from './components/Formulario'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Blog from './components/Blog'
import Favoritos from './components/Favorites'
import Article from './components/Article'

export default class Router extends Component {
  render() {
    
    return (
      <BrowserRouter>
        <Header />
            <Switch>
              <Route
                path="/"
                exact
                component={Home}                
              />
              <Route
                path="/home"
                exact
                component={Home}
              />
              <Route
                path="/blog"
                exact
                component={Blog}
              />
               <Route
                path="/blog/article/:id"
                exact
                component={Article}
              />
              <Route
                path="/formulario"
                exact
                component={Formulario}
              />
              <Route
                path="/favoritos"
                exact
                component={Favoritos}
              />
              <Route
                component={Error}
              />

            </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}
