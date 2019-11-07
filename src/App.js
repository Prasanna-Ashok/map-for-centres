import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Filter from './Filter';
import MapView from './MapView';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Filter></Filter>
        <MapView data={""}></MapView>
      </div>
    );
  }
}

export default App;
