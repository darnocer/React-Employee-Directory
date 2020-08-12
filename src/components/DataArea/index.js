import React, { Component } from "react";
import Headings from "../Headings";
import API from "../../utils/API";
import "./style.css";

class DataArea extends Component {
  state = {
    users: [{}],
    // order: descend,
    filteredUsers: [{}],
  };

  headings = [
    { name: "", width: "5%" },
    { name: "Name", width: "25%" },
    { name: "Phone", width: "20%" },
    { name: "Email", width: "20%" },
    { name: "DOB", width: "20%" },
  ];

  componentDidMount() {
    API.getUsers().then((results) => {
      this.setState({
        users: results.data.results,
        filteredUsers: results.data.results,
      });
    });
  }

  render() {
    return (
      <>
        <Headings headings={this.headings} users={this.state.filteredUsers} />
      </>
    );
  }
}

export default DataArea;
