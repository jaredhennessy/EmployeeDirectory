import React from "react";

function TableHeader(props) {
  return (
    <tr>
      <th scope="col"></th>
      <th scope="col" className="sortBy" onClick={props.handleSort} id="name">
        <i
          className={
            props.sortedBy === "name"
              ? "fas fa-arrow-circle-down"
              : "fas fa-arrow-circle-down hidden"
          }
        ></i>{" "}
        Name
      </th>
      <th scope="col" className="sortBy" onClick={props.handleSort} id="phone">
        <i
          className={
            props.sortedBy === "phone"
              ? "fas fa-arrow-circle-down"
              : "fas fa-arrow-circle-down hidden"
          }
        ></i>{" "}
        Phone
      </th>
      <th scope="col" className="sortBy" onClick={props.handleSort} id="email">
        <i
          className={
            props.sortedBy === "email"
              ? "fas fa-arrow-circle-down"
              : "fas fa-arrow-circle-down hidden"
          }
        ></i>{" "}
        Email
      </th>
      <th scope="col" className="sortBy" onClick={props.handleSort} id="date">
        <i
          className={
            props.sortedBy === "date"
              ? "fas fa-arrow-circle-down"
              : "fas fa-arrow-circle-down hidden"
          }
        ></i>{" "}
        DOB
      </th>
    </tr>
  );
}

export default TableHeader;
