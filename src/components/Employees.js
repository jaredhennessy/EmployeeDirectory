import React from "react";
import TableHeader from "./TableHeader";
import Employee from "./Employee";

function Employees(props) {
  if (props.loaded) {
    // console.log(props.people);
    const employeeList = props.people;

    return (
      <div class="container">
        <div>
          <table className="table table-striped table-hover">
            <thead className="thead-dark">
              <TableHeader />
            </thead>
            <tbody>
              {employeeList.map(people => (
                <Employee
                  id={people.login.uuid}
                  image={people.picture.thumbnail}
                  name={people.name.first + " " + people.name.last}
                  phone={people.phone}
                  email={people.email}
                  date={people.dob.date}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Employees;
