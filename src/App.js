import React from "react";
import PageHeader from "./components/PageHeader";
import Search from "./components/Search";
import Employees from "./components/Employees";
import API from "./utils/api";

class App extends React.Component {
  state = {
    people: {},
    modPeople: {},
    searchTerm: "",
    sortBy: "",
    loaded: false
  };

  componentDidMount() {
    API.search()
      .then(res => {
        // console.log(res.data.results);
        this.setState({
          people: res.data.results,
          modPeople: res.data.results,
          loaded: true
        });
      })
      .catch(err => console.log(err));
  }

  handleInputChange = async event => {
    await this.setState({
      searchTerm: event.target.value.toLowerCase()
    });
    // console.log(this.state.searchTerm);
    this.filterPeople();
  };

  filterPeople = () => {
    let filteredList = this.state.people.filter(employee => {
      let employeeName = `${employee.name.first.toLowerCase()} ${employee.name.last.toLowerCase()}`;
      return employeeName.includes(this.state.searchTerm);
    });

    this.setState({
      modPeople: filteredList
    });
  };

  render() {
    return (
      <div className="container">
        <PageHeader />
        <Search
          handleInputChange={this.handleInputChange}
          searchTerm={this.state.searchTerm}
        />
        <Employees
          people={this.state.modPeople}
          sortBy={this.state.sortBy}
          loaded={this.state.loaded}
        />
      </div>
    );
  }
}

export default App;
