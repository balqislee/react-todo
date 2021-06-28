import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  render(){
  return (
    <div className="component">
      <h1 className="text-center">To Do App</h1>
      <Todos />
    </div>
  );
}}

export default App;
