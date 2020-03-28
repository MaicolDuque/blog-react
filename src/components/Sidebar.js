import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <aside id="sidebar">
        {this.props.blog === "true" &&
          <div id="nav-blog" className="sidebar-item">
            <h3>Puede hacer esto..</h3>
            <a href="" className="btn btn-success">Crear articulo </a>
          </div>          
        }

        <div id="search" className="sidebar-item">
          <h3>Buscador</h3>
          <p>Encuentra el articulo que buscas</p>
          <form action="">
            <input type="text" name="search" />
            <input type="submit" value="Buscar" className="btn" />
          </form>
        </div>
    </aside>
    )
  }
}
