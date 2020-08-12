import React from "react";
import "./style.css";

function Table({ users }) {
  console.log(users);

  return (
    <tbody>
      {users[0] !== undefined && users[0].name !== undefined ? (
        users.map(({ name, picture, phone, email, dob }) => {
          return (
            <tr>
              <td className="align-middle">
                <img
                  src={picture.medium}
                  alt={name}
                  className="img img-responsive"
                />
              </td>
              <td className="name-cell align-middle">
                {name.first} {name.last}
              </td>
              <td className="align-middle">{phone}</td>
              <td className="align-middle">
                <a href={"mailto:" + email} target="__blank">
                  {email}
                </a>
              </td>
              <td className="align-middle">{dob.date}</td>
            </tr>
          );
        })
      ) : (
        <></>
      )}
    </tbody>
  );
}
export default Table;
