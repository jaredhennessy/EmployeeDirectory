import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Employee Directory</h1>
        <hr className="my-4" />
        <p className="lead">
          Click a field name in the header row to sort the table by that field.
        </p>
      </div>
    );
  }
}

export default Header;
