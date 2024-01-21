import { Component } from "react";

class SearchBar extends Component {
  render() {
    const { onChangeSearch } = this.props;
    return (
      <div className="search">
        <input type="text" placeholder="Search" onChange={onChangeSearch} />
        <button className="btn" type="button">
          Search
        </button>
      </div>
    );
  }
}

export default SearchBar;
