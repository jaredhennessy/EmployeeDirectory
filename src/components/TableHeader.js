import React from "react";

function TableHeader(props) {
  return (
    <tr>
      <th className="col"></th>
      <th className="col" onClick={props.handleSort} id="name">
        Name
      </th>
      <th className="col" onClick={props.handleSort} id="phone">
        Phone
      </th>
      <th className="col" onClick={props.handleSort} id="email">
        Email
      </th>
      <th className="col" onClick={props.handleSort} id="date">
        DOB
      </th>
    </tr>
  );
}

export default TableHeader;
