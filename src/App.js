import React from "react";
import PageHeader from "./components/PageHeader";
import Search from "./components/Search";
import Employees from "./components/Employees";
import API from "./utils/API";

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

  handleSort = event => {
    console.log(event.target.getAttribute("id"));
    const sortBy = event.target.getAttribute("id");

    if (this.state.sortBy === sortBy) {
      return this.setState({
        modPeople: this.state.modPeople.reverse(),
        sortBy: sortBy
      });
    }

    let sortedList = this.state.modPeople.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.first < b.name.first ? 1 : -1;
        case "date":
          return a.dob.date < b.dob.date ? 1 : -1;
        default:
          return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    });

    this.setState({
      modPeople: sortedList,
      sortedBy: sortBy
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
          handleSort={this.handleSort}
          loaded={this.state.loaded}
        />
      </div>
    );
  }
}

export default App;
