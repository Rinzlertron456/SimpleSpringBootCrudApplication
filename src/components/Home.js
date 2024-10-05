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
                  <td>{employee.empId}</td>
                  <td>{employee.empName}</td>
                  <td>{employee.empProfile}</td>
                  <td>{employee.empDomain}</td>
                  <td>{employee.empExperience}</td>
                  <td>{employee.empManager}</td>
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
