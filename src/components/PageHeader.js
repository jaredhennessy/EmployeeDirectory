import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Employee Directory</h1>
        <hr className="my-4" />
        <p className="lead">
          Click field name to sort the table. Click an arrow to reverse the
          sort.
        </p>
      </div>
    );
  }
}

export default Header;
