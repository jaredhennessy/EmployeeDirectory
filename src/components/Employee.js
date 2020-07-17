import React from "react";
import Moment from "moment";

function Employee(props) {
  return (
    <tr key={props.id}>
      <th scope="row">
        <img src={props.image} alt="employee thumbnail" />
      </th>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>
        <a href={"mailto:" + props.email}>{props.email}</a>
      </td>
      <td>{Moment(props.date).format("MM-DD-YY")}</td>
    </tr>
  );
}

export default Employee;
