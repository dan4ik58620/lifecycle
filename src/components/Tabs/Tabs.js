import React, { Component } from "react";

class Tabs extends Component {
  state = {
    startIndex: 0,
  };
  setIndex = (index) => {
    this.setState({ startIndex: index });
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.startIndex!==this.state.startIndex;
  }

  render() {
    // console.log(this.props.phrases);
    const { phrases } = this.props;
    console.log(phrases);
    const { startIndex } = this.state;
    console.log(startIndex);
    const item = phrases[startIndex];

    return (
      <>
        <div>
          {phrases.map((elem, idx) => {
            return (
              <button
                type="button"
                key={idx}
                onClick={() => this.setIndex(idx)}
              >
                {elem.label}
              </button>
            );
          })}
        </div>
        <div>
          <h3>{item.label}</h3>
          <p>{item.content}</p>
        </div>
      </>
    );
  }
}

export default Tabs;
