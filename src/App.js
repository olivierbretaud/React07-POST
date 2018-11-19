import React, { Component } from 'react';
import FormMovie from './Components/FormMovie';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <FormMovie/>
        </header>
      </div>
    );
  }
}

export default App;
