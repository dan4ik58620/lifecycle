import React, { Component } from "react";
import Modal from "./components/Modal";
import Clock from "./components/Clock/Clock";
import Tabs from "./components/Tabs/Tabs";
import phrases from "./phrases.json";

class App extends Component {
  state = {
    //
    showModal: false,
    time: false,
  };
  openModal = () => {
    this.setState(() => {
      return {
        showModal: !this.state.showModal,
      };
    });
  };

  showTime = () => {
    this.setState(() => {
      return { time: !this.state.time };
    });
  };

  render() {
    return (
      <>
        <h1>Hello</h1>
        <h2>World</h2>
        <button type="button" onClick={this.openModal}>
          click
        </button>
        {this.state.showModal && (
          <Modal onClose={this.openModal}>
            <h2>Test</h2>
            <p>2</p>
            <button onClick={this.openModal}>close me</button>
          </Modal>
        )}
        <button type="button" onClick={this.showTime}>
          {" "}
          showTime
        </button>
        {this.state.time && <Clock />}
        <Tabs phrases={phrases}/>
      </>
    );
  }
}

export default App;
