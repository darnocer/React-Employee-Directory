import React from "react";
import "./style.css";

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
                  onClick={props.handleBtnClick}></i>
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
