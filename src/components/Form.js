import React, { Component } from 'react';
import './Form.css';

class Form extends Component {

    handleSubmit = e => {
        e.preventDefault();
    }

  render() {
    const { value, onChange, onCreate, color } = this.props;

    return (
        <form className="form" onSubmit={this.handleSubmit}>
        <input value={value} onChange={onChange} style={{ color : color }}/>
        <button type="submit" className="create-button" onClick={onCreate}>
          추가
        </button>
      </form>
    )
  }
}

export default Form;