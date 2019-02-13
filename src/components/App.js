import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Button from './Button';
import Panel from './Panel';
import Footer from './Footer';


class App extends Component {
  state = {
    isDrawn: false,
    numbers: [],
    shine: ''
  }
  handleClick = () => {
    let numbers = [];
    for (let i = 0; i < 48; i++) {
      numbers.push(i + 1);
    }

    const shineX = Math.floor(Math.random() * 60) + 20;
    const shineY = Math.floor(Math.random() * 60) + 20;
    const shine = `radial-gradient(closest-side at ${shineX}% ${shineY}%, white, yellow 50%)`;

    numbers.sort(() => 0.5 - Math.random());
    numbers = numbers.splice(0, 6);
    numbers.sort((a, b) => a - b);
    this.setState({
      numbers,
      isDrawn: true,
      shine
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Button click={this.handleClick} isDrawn={this.state.isDrawn} />
        <Panel numbers={this.state.numbers} shine={this.state.shine} />
        <Footer />
        <div className="star"></div>
      </div>
    );
  }
}

export default App;
