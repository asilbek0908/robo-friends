import { Component } from "react";
import Robot from "./Robot";

class Robots extends Component {
  render() {
    const { robots } = this.props;
    return (
      <div className="robots">
        {robots.map((robot) => {
          return <Robot key={robot.id} {...robot} />;
        })}
      </div>
    );
  }
}

export default Robots;
