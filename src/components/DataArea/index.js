import React, { Component } from "react";
import DataTable from "../DataTable";
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

  // handleSort = (heading) => {
  //   if (this.state.order === "descend") {
  //     this.setState({
  //       order: "ascend",
  //     });
  //   } else {
  //     this.setState({
  //       order: "descend",
  //     });
  //   }

  // const compareFnc = (a, b) => {
  //   if (this.state.order === "ascend") {
  //     // Account for missing values
  //     if (a[heading] === undefined) {
  //       return 1;
  //     } else if (b[heading] === undefined) {
  //       return -1;
  //     }
  //     // Numerically
  //     else if (heading === "name") {
  //       return a[heading].first.localeCompare(b[heading].first);
  //     } else {
  //       return a[heading] - b[heading];
  //     }
  //   } else {
  //     // Account for missing values
  //     if (a[heading] === undefined) {
  //       return 1;
  //     } else if (b[heading] === undefined) {
  //       return -1;
  //     }
  //     // Numerically
  //     else if (heading === "name") {
  //       return b[heading].first.localeCompare(a[heading].first);
  //     } else {
  //       return b[heading] - a[heading];
  //     }
  //   }
  // };
  //   const sortedUsers = this.state.filteredUsers.sort(compareFnc);
  //   this.setState({ filteredUsers: sortedUsers });
  // };

  // handleSearchChange = (event) => {
  //   console.log(event.target.value);
  //   const filter = event.target.value;
  //   const filteredList = this.state.users.filter((item) => {
  //     // merge the data together and then check the user's input
  //     let values = Object.values(item).join("").toLowerCase();
  //     return values.indexOf(filter.toLowerCase()) !== -1;
  //   });
  //   this.setState({ filteredUsers: filteredList });
  // };

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
        {/* <Nav handleSearchChange={this.handleSearchChange} /> */}
        <div>
          <DataTable
            headings={this.headings}
            users={this.state.filteredUsers}
            handleSort={this.handleSort}
          />
        </div>
      </>
    );
  }
}

export default DataArea;
