import React from "react";

function Headings(props) {
  return (
    <thead className="thead-dark">
      <tr>
        {props.headings.map(({ hname, width }) => {
          return (
            <th className="col" key={hname} style={{ width }}>
              {hname}{" "}
              {hname ? (
                <i
                  className="fas fa-sort"
                  data-key={hname}
                  onClick={props.handleSort}></i>
              ) : (
                ""
              )}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export default Headings;
