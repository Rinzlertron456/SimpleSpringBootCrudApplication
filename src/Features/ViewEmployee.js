import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditEmployee() {
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    designation: "",
    domain: "",
    experience: "",
    manager: "",
  });
  const { id: paramId } = useParams();

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    const result = await axios.get(`http://localhost:8080/employee/${paramId}`);
    setEmployee(result.data);
  };
  const { id, name, designation, domain, experience, manager } = employee;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">EDIT EMPLOYEE DETAILS</h2>
          <form>
            <div className="text-center mb-3">
              <label htmlFor="id" className="form-label">
                Employee ID
              </label>
              <input
                type="text"
                className="form-control text-center"
                id="id"
                placeholder="Employee ID"
                value={id}
                disabled="true"
                // onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="text-center mb-3">
              <label htmlFor="name" className="form-label">
                Name of the Employee
              </label>
              <input
                type="text"
                className="form-control text-center"
                id="name"
                placeholder="Name"
                value={name}
                disabled="true"
                // onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="text-center mb-3">
              <label htmlFor="designation" className="form-label">
                Designation
              </label>
              <input
                type="text"
                className="form-control text-center"
                id="designation"
                placeholder="Designation"
                value={designation}
                disabled="true"
                // onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="text-center mb-3">
              <label htmlFor="domain" className="form-label">
                Domain
              </label>
              <input
                type="text"
                className="form-control text-center"
                id="domain"
                placeholder="Domain"
                value={domain}
                disabled="true"
                // onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="text-center mb-3">
              <label htmlFor="experience" className="form-label">
                Experience
              </label>
              <input
                type="text"
                className="form-control text-center"
                id="experience"
                placeholder="Overall Experience ( in years )"
                value={experience}
                disabled="true"
                // onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="text-center mb-3">
              <label htmlFor="project_manager" className="form-label">
                Project Manager
              </label>
              <input
                type="text"
                className="form-control text-center"
                id="manager"
                placeholder="Project Manager"
                value={manager}
                disabled="true"
                // onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div
              className="container"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Link className="btn btn-outline-danger" to="/">
                Back to Dashboard
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditEmployee;
