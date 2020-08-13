import React, { Component } from "react";
import Headings from "./Headings";
import Table from "./Table";
import API from "../../../utils/API";
import "./style.css";

class DataArea extends Component {
  state = {
    users: [{}],
    filteredUsers: [{}],
    sort: false,
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

  handleBtnClick = (event) => {
    const hname = event.target.attributes.getNamedItem("data-key").value;
    const newState = { ...this.state };

    this.setState(newState);
  };

  render() {
    return (
      <table className="table table-striped table-hover mt-5">
        <Headings
          headings={this.headings}
          handleBtnClick={this.handleBtnClick}
        />
        <Table users={this.state.filteredUsers} />
      </table>
    );
  }
}

export default DataArea;
