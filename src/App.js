import React, { Component } from 'react';
import './App.css';
import GifPage from './components/GifPage';
//this is temporary data  to use for testing to avoid having to use teh api repeatedly
import sampleData from './testdata';

class App extends Component {
  render() {
    const data = sampleData.data;
    return (
      <div className="App">
        <GifPage items={data} />
      </div>
    );
  }
}

export default App;
