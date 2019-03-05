import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'
class App extends Component {
  render() {
    return (
        <div className="container">
        <h1 className="jumbotron-heading text-center">{this.props.value}</h1>
        <p className="text-center">
        <button onClick={this.props.onIncream}  className="btn btn-primary mr-2">Increase</button>
        <button onClick={this.props.deCrease} className="btn btn-danger my-2">Decrease</button>
        </p>
        </div>
    );
  }
}

App.propTypes={
            value:PropTypes.number.isRequired,
       onIncream:PropTypes.func.isRequired,
        deCrease:PropTypes.func.isRequired
}

export default App;
