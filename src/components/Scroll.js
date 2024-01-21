import { Component } from "react";

class Scroll extends Component {
  render() {
    return (
      <div
        style={{
          overflow: "scroll",
          border: "3px solid #000",
          height: "700px",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Scroll;
