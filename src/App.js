import React, { Component } from 'react';
import './App.css';
import ShoppingCart from './components/shoppingcart.js';
import './assets/css/shopcart.css';
import './assets/css/reset.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <nav>导航</nav> */}
        <ShoppingCart /> 
      </div>
    );
  }
}

export default App;
