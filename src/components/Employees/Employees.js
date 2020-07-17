import React, { Component } from "react";
import API from "../../utils/api";

class Employees extends Component {
  state = {
    result: {},
    search: ""
  };

  componentDidMount() {
    this.searchEmployees();
    console.log(this.state.result);
  }

  searchEmployees = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        {/* <img
          src={this.state.result.picture.thumbnail}
          alt="employee thumbnail"
        />{" "}
        {this.state.result.name.first} {this.state.result.name.last}{" "}
        {this.state.result.phone} {this.state.result.email}{" "}
        {this.state.result.dob} */}
      </div>
    );
  }
}

export default Employees;
