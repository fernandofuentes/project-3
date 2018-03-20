import React, { Component } from 'react';
import './App.css';
import { jokes } from './dadJokes.json';
import DadJoke from './components/DadJoke.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: "Click The Button To Get A Fact!"
    }
  }

  generateJoke() {
    let joke = jokes[Math.floor(Math.random()*jokes.length)];
    this.setState({joke: joke});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1> Team Members Fun Facts! </h1>
          <button onClick={() => this.generateJoke()}>Generate</button>
        </div>
        <p className="App-intro">
          <DadJoke joke={this.state.joke} />
        </p>
      </div>
    );
  }
}

export default App;
