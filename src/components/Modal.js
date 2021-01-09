import React, { Component } from "react";
import classes from "./Modal.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.removeE);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.removeE);
  }

  removeE = (e) => {
    if (e.key === "Escape") {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className="modalWrapper">
        <div className="modal">{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;
