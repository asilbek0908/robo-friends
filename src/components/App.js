import { Component } from "react";
import Robots from "./Robots";
import SearchBar from "./SearchBar";
import Scroll from "./Scroll.js";

class App extends Component {
  state = {
    robots: [],
    searchField: "",
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onChangeSearch = (e) => {
    this.setState({
      searchField: e.target.value,
    });
  };

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? (
      <div className="loading">
        <div className="loader">
          <span className="loader-text">loading</span>
          <span className="load"></span>
        </div>
      </div>
    ) : (
      <div>
        <h1 className="logo f1">RoboFriends</h1>
        <SearchBar onChangeSearch={this.onChangeSearch} />
        <Scroll>
          <Robots robots={filteredRobots} />;
        </Scroll>
      </div>
    );
  }
}

export default App;
