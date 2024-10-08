import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [employees, setEmployees] = useState([]);
  const displayEmployees = async () => {
    const result = await axios.get("http://localhost:8080/employees");
    setEmployees(result.data);
  };
  useEffect(() => {
    displayEmployees();
  }, []);

  return (
    <div className="container">
      <div className="py-4">
        <table className="table table-striped shadow">
          <thead>
            <tr>
              <th scope="col">Employee ID</th>
              <th scope="col">Name of the Employee</th>
              <th scope="col">Designation</th>
              <th scope="col">Domain</th>
              <th scope="col">Experience (in years) </th>
              <th scope="col">Project Manager</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => {
              return (
                <tr key={index}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.designation}</td>
                  <td>{employee.domain}</td>
                  <td>{employee.experience}</td>
                  <td>{employee.manager}</td>
                  <td>
                    <button className="btn btn-outline-primary mx-2">
                      View
                    </button>
                    <button className="btn btn-outline-secondary mx-2">
                      Edit
                    </button>
                    <button className="btn btn-outline-danger mx-2">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
