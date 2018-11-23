import React, { Component } from 'react';
import './palette.css';

class palette extends Component {
  render() {
    const { ColorClick } = this.props;
    const { color, active} = this.props.colors;

    console.log(color);

    const colorList = color.map(color => <div style={{ background : color, opacity : color === active ? '1' : '0.5' }} key={color} onClick={() => {ColorClick(color)}}></div>)

    return (
      <div className="palette">
        { colorList }
      </div>
    )
  }
}

export default palette;