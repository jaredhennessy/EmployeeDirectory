import React from "react";

function TableHeader(props) {
  return (
    <tr>
      <th scope="col"></th>
      <th scope="col" className="sortBy" onClick={props.handleSort} id="name">
        <i className="fas fa-arrow-circle-down"></i>
        &nbsp;Name
      </th>
      <th scope="col" className="sortBy" onClick={props.handleSort} id="phone">
        <i className="fas fa-arrow-circle-down"></i>
        &nbsp;Phone
      </th>
      <th scope="col" className="sortBy" onClick={props.handleSort} id="email">
        <i className="fas fa-arrow-circle-down"></i>
        &nbsp;Email
      </th>
      <th scope="col" className="sortBy" onClick={props.handleSort} id="date">
        <i className="fas fa-arrow-circle-down"></i>
        &nbsp;DOB
      </th>
    </tr>
  );
}

export default TableHeader;
