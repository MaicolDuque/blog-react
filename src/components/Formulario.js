import React, { Component } from 'react'
import Slider from './Slider'
import Sidebar from './Sidebar'


export default class Formulario extends Component {

  state = {
    user: {}
  }

  nombreRef         = React.createRef();
  apellidosRef      = React.createRef();
  bioRef            = React.createRef();
  generoHombreRef   = React.createRef();
  generoMujerRef    = React.createRef();
  generoOtroRef     = React.createRef();


  recibirFormulario = (event) => {
    event.preventDefault();
    let genero = 'hombre';
    if(this.generoMujerRef.current.checked){
      genero = this.generoMujerRef.current;
    }else if(this.generoOtroRef.current.checked){
      genero = this.generoOtroRef.current.value
    }

    let user = {
      nombre:       this.nombreRef.current.value,
      apellidos:    this.apellidosRef.current.value,
      bio:          this.bioRef.current.value,
      genero:       genero
    }

    this.setState({
      user: user
    })
    console.log(this.nombreRef.current.value)
  }

  render() {
    return (
      <div>
        <Slider
          title="Formulario"
          size="slider-small"
        />
        <div className="center">
          <section id="content">
            <form action="" className="mid-form" onSubmit={this.recibirFormulario}>
              <div className="form-group">
                <label for="nombre" >Nombre</label>
                <input type="text" name="nombre" id="" ref={this.nombreRef} />
              </div>
              <div className="form-group">
                <label for="apellidos" >Apellidos</label>
                <input type="text" name="nombre" id="" ref={this.apellidosRef} />
              </div>
              <div className="form-group">
                <label for="bio" >Biografia</label>
                <textarea name="bio" id="" cols="30" rows="10" ref={this.bioRef}>
                </textarea>
              </div>

              <div className="form-group">
                <input type="radio" name="genero" id="" value="hombre" ref={this.generoHombreRef} />Hombre
                <input type="radio" name="genero" id="" value="mujer" ref={this.generoMujerRef} />Mujer
                <input type="radio" name="genero" id="" value="otro" ref={this.generoOtroRef}  />Otro
              </div>

              <input type="submit" value="Enviar" className="btn btn-success" />
            </form>
          </section>
          <Sidebar />
          <div className="clearfix"></div>
        </div>
      </div>
    )
  }
}
