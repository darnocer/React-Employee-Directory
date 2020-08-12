import React from "react";
import Table from "../Table";
import "./style.css";

function Headings({ headings, users }) {
  return (
    <table className="table table-striped table-hover mt-5">
      <thead className="thead-dark">
        <tr>
          {headings.map(({ name, width }) => {
            return (
              <th className="col" key={name} style={{ width }}>
                {name}
              </th>
            );
          })}
        </tr>
      </thead>
      <Table users={users} />
    </table>
  );
}

export default Headings;
