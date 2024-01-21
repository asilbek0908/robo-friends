import { Component } from "react";

class Robot extends Component {
  render() {
    const { id, name, username, email } = this.props;
    return (
      <div key={id} className=" robot bg-light-green br3 dib pa3 ma2 grow sh">
        <img src={`https://robohash.org/${username}`} alt="robots" />
        <div>
          <h1>{name}</h1>
          <p>{email}</p>
        </div>
      </div>
    );
  }
}

export default Robot;
