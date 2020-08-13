import React, { Component } from "react";
import Headings from "./Headings";
import Table from "./Table";
import Search from "../../Search";
import API from "../../../utils/API";

class DataArea extends Component {
  state = {
    search: "",
    users: [{}],
    filteredUsers: [{}],
    sort: "descend",
  };

  headings = [
    { hname: "", width: "10%", sort: "descend" },
    { hname: "Name", width: "25%", sort: "descend" },
    { hname: "Phone", width: "20%", sort: "descend" },
    { hname: "Email", width: "20%", sort: "descend" },
    { hname: "DOB", width: "20%", sort: "descend" },
  ];

  componentDidMount() {
    API.getUsers().then((response) => {
      this.setState({
        users: response.data.results,
        filteredUsers: response.data.results,
      });
    });
  }

  // handles input field when typing
  handleInputChange = (event) => {
    // grabs search value entered in input field
    const newSearch = event.target.value.toLowerCase();
    // updates the search state
    this.setState({ search: newSearch });
    // current user list
    const users = this.state.users;
    console.log(users);
    // filters users to those containing search values
    const filtered = users.filter(
      (item) =>
        item.name.first.toLowerCase().includes(newSearch) ||
        item.name.last.toLowerCase().includes(newSearch) ||
        item.phone.includes(newSearch) ||
        item.dob.date.slice(0, 10).includes(newSearch)
    );
    // updates the filtered users
    this.setState({ filteredUsers: filtered });
  };

  // handles sorting when clicking on sort icon
  handleSort = (event) => {
    const users = this.state.users;
    console.log(users);

    // grabs the column heading of the
    let hname = event.target.attributes
      .getNamedItem("data-key")
      .value.toLowerCase();
    console.log(hname);

    // updates the state of sort it its opposite state
    if (this.state.sort === "descend") {
      this.setState({
        sort: "ascend",
      });
    } else {
      this.setState({
        sort: "descend",
      });
    }

    let sortedUsers;
    // if sorting on the name column, need to drill down to users.name.first
    if (hname === "name") {
      sortedUsers = users.sort((a, b) => {
        if (a.name.first < b.name.first) {
          return -1;
        }
        if (a.name.first > b.name.first) {
          return 1;
        }
        return 0;
      });
      // if sorting on the name column, need to drill down to users.dob.date
    } else if (hname === "dob") {
      sortedUsers = users.sort((a, b) => {
        if (a.dob.date < b.dob.date) {
          return -1;
        }
        if (a.dob.date > b.dob.date) {
          return 1;
        }
        return 0;
      });
      // otherwise, we can just use the heading name to find the property to sort on
    } else {
      sortedUsers = users.sort((a, b) => {
        if (a[hname] < b[hname]) {
          return -1;
        }
        if (a[hname] > b[hname]) {
          return 1;
        }
        return 0;
      });
    }

    // simply reverse the sort in one of the cases
    if (this.state.sort === "descend") {
      reverseSort(sortedUsers);
    }

    // set the state to be the sortedusers which will re-render the display
    this.setState({ users: sortedUsers });

    function reverseSort(sortedUsers) {
      return sortedUsers.reverse();
    }
  };

  render() {
    return (
      <>
        <Search handleInputChange={this.handleInputChange} />
        <table className="table table-striped table-hover mt-5">
          <Headings headings={this.headings} handleSort={this.handleSort} />
          <Table users={this.state.filteredUsers} />
        </table>
      </>
    );
  }
}

export default DataArea;
