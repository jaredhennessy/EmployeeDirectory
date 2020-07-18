import React from "react";

function TableHeader(props) {
  return (
    <tr>
      <th scope="col"></th>
      <th scope="col" className="sortBy" onClick={props.handleSort} id="name">
        <i className="fas fa-arrow-circle-down"></i>
        Name
      </th>
      <th scope="col" className="sortBy" onClick={props.handleSort} id="phone">
        <i
          className={
            props.sortedBy === "phone" ? "fas fa-arrow-circle-down" : ""
          }
        ></i>{" "}
        Phone
      </th>
      <th scope="col" className="sortBy" onClick={props.handleSort} id="email">
        <i className="fas fa-arrow-circle-down"></i>
        Email
      </th>
      <th scope="col" className="sortBy" onClick={props.handleSort} id="date">
        <i className="fas fa-arrow-circle-down"></i>
        DOB
      </th>
    </tr>
  );
}

export default TableHeader;
