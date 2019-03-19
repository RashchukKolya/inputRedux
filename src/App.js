import React, { Component } from 'react';
import {connect} from 'react-redux';
import {input} from './redux/actions/inputAction';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <form>
          <input type='text' value={this.props.input} onChange={this.props.inputChange} placeholder='Enter input'/>
        </form>
      </div>
    );
  }
}

function MSTP (state){
  return {
    input: state.input,
  }
}

function MDTP (dispatch){
  return {
    inputChange: function(e){
      dispatch(input(e))
    }
  }
}

export default connect(MSTP, MDTP)(App);
