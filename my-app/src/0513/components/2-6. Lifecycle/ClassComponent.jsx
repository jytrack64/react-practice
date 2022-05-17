import React, { Component } from 'react'

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = { date: new Date() };
    this.handleClick = this.handleClick(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillMount() {
    console.log('componentWillMount');
    clearInterval(this.timerID);
  }

  tick() {
    // console.log('tick');
    this.setState({date: new Date()});
  }

  handleClick() {
    alert(this.state.date);
  }

  render() {
    console.log('render');
    return (
      <>
        <h1 onClick={this.handleClick}>Hello, world!</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </>
    );
  }
}
