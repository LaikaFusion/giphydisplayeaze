import React, { Component } from 'react';
import './App.css';
import sampleData from './testdata';

class App extends Component {
  render() {
    const data = sampleData.data;
    return (
      <div className="App">
        {data.map(e=>{
          // return e.images.fixed_height_still.url
          return (<img src={e.images.fixed_height.url}/>)
        })}
      </div>
    );
  }
}

export default App;
