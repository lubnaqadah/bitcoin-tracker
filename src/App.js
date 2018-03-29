import React, { Component } from 'react';
import './App.css';
import Footer from "./components/footer";
import Header from "./components/header";
import Portfolio from "./components/portfolio";



class App extends Component {
  render() {
    return (
      <div className="App">
       	<Header />
       	<Portfolio />
       	<Footer />
      </div>
    );
  }
}

export default App;
