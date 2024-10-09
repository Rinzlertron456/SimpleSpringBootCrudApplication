import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Home() {
  const [employees, setEmployees] = useState([]);
  const { id } = useParams();
  const displayEmployees = async () => {
    const result = await axios.get("http://localhost:8080/employees");
    setEmployees(result.data);
  };
  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:8080/employee/${id}`);
    displayEmployees();
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
                    <Link
                      className="btn btn-outline-primary mx-2"
                      to={`/viewEmployee/${employee.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-secondary mx-2"
                      to={`editEmployee/${employee.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-outline-danger mx-2"
                      onClick={() => deleteEmployee(employee.id)}
                    >
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
