import React, { Component } from "react";
import Headings from "./Headings";
import Table from "./Table";
import Search from "../../Search";
import API from "../../../utils/API";
import "./style.css";

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

  handleSort = (event) => {
    const users = this.state.users;

    let hname = event.target.attributes
      .getNamedItem("data-key")
      .value.toLowerCase();
    console.log(hname);

    if (this.state.sort === "descend") {
      this.setState({
        sort: "ascend",
      });
      console.log("updated to ascend");
    } else {
      this.setState({
        sort: "descend",
      });
      console.log("updated to descend");
    }

    if (hname === "name") {
      console.log(users);

      // let firstNames = users.map((item) => item.name.first);

      let sortedUsers = users.sort((a, b) => {
        if (a.name.first < b.name.first) {
          return -1;
        }
        if (a.name.first > b.name.first) {
          return 1;
        }
        return 0;
      });

      if (this.state.sort === "descend") {
        reverseSort(sortedUsers);
      }

      console.log(sortedUsers);

      this.setState({ filteredUsers: sortedUsers });
    }

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
