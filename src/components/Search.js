import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="form-box">
        <form className="form-group">
          <label htmlFor="emailSearch">Name Search:&nbsp;</label>
          <input
            value={this.props.searchTerm}
            onChange={this.props.handleInputChange}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search"
          />
          {/* <button
            type="submit"
            // onClick={props.handleFormSubmit}
            className="btn btn-success"
          >
            Search
          </button> */}
        </form>
      </div>
    );
  }
}

export default Search;