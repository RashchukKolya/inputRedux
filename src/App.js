import React, { Component } from 'react';
import {connect} from 'react-redux';
import {change} from './redux/actions/inputAction';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <input type="text" name='mob' onChange={this.props.change} value={this.props.text.mob} placeholder='Enter mob'/>
          <input type="text" name='tel' onChange={this.props.change} value={this.props.text.tel} placeholder='Enter tel'/>
          <input type="text" name='adress' onChange={this.props.change} value={this.props.text.adress} placeholder='Enter adress'/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
      text:state.text,
  }
  }
  function mapDispatchToProps(dispatch){
      return{
          change:function(ev){
          dispatch(change(ev))}
      }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);
