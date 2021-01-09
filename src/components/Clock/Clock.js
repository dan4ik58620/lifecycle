import React, { Component } from "react";
// import css from "./Modal,css";

class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };
  constructor(p) {
    super(p);
    this.intervalId = null;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <>
        <div>{this.state.time}</div>
      </>
    );
  }
}

export default Clock;