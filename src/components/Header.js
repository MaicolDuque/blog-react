import React, { Component } from 'react'
import logo from '../assets/images/react.svg'
import { NavLink } from 'react-router-dom'


class Header extends Component {

  render() {
    return (
      <header id="header">
        <div className="center">

          <div id="logo">
            <img src={logo} className="app-logo" alt="Logotipo" />
            <span id="brand">
              <strong>React</strong>Blog
              </span>
          </div>

          <nav id="menu">
            <ul>
              <li>
                <NavLink to="/home" activeClassName="active" >Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/blog" activeClassName="active" >blog</NavLink>
              </li>
              <li>
                <NavLink to="/formulario" activeClassName="active" >Formulario</NavLink>
              </li>
              <li>
                <NavLink to="/favoritos" activeClassName="active">Artículos Favoritos</NavLink>
              </li> 
              <li>
                <NavLink to="/pagina-2" activeClassName="active">Página 2</NavLink>
              </li>
            </ul>
          </nav>

          <div className="clearfix"></div>
        </div>
      </header>
    )
  }
}

export default Header