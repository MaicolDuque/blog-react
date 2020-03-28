import React, { Component } from 'react'

export default class Slider extends Component {
  render() {
    const { title, btn, size } = this.props
    return (
      <div id="slider" className={size}>
        <h1>{title}</h1>
        {btn &&
          <a href="blog.html" className="btn-white">{btn}</a>
        }
        
      </div>
    )
  }
}
