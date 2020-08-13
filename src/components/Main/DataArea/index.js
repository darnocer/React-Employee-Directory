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
    { hname: "", width: "10%" },
    { hname: "Name", width: "25%" },
    { hname: "Phone", width: "20%" },
    { hname: "Email", width: "20%" },
    { hname: "DOB", width: "20%" },
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
    const newSearch = event.target.value.toLowerCase();
    this.setState({ search: newSearch });
    const users = this.state.users;
    const filtered = users.filter(
      (item) =>
        item.name.first.toLowerCase().includes(newSearch) ||
        item.name.last.toLowerCase().includes(newSearch)
    );
    this.setState({ filteredUsers: filtered });
  };

  handleSort = (event) => {
    const hname = event.target.attributes.getNamedItem("data-key").value;
    console.log(hname);
    // const users = this.state.users;
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
