import React from "react";

function Table({ users }) {
  function formatDate(date) {
    const newDate = date.slice(0, 10);
    const YYYY = newDate.slice(0, 4);
    const MM = newDate.slice(5, 7);
    const DD = newDate.slice(8, 10);
    const formattedDate = MM + "/" + DD + "/" + YYYY;
    return formattedDate;
  }

  return (
    <tbody>
      {users[0] !== undefined && users[0].name !== undefined ? (
        users.map(({ name, login, picture, phone, email, dob }) => {
          return (
            <tr key={login.uuid}>
              <td className="align-middle">
                <img
                  src={picture.medium}
                  alt="profile"
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
              <td className="align-middle">{formatDate(dob.date)}</td>
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
