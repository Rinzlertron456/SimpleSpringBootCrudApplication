import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddEmployee() {
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    designation: "",
    domain: "",
    experience: "",
    manager: "",
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setEmployee({ ...employee, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/employee", employee);
    navigate("/");
  };
  const { id, name, designation, domain, experience, manager } = employee;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">EMPLOYEE REGISTRATION FORM</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="text-center mb-3">
              {/* <label htmlFor="id" className="form-label">
                Employee ID
              </label> */}
              <input
                type="text"
                className="form-control"
                id="id"
                placeholder="Employee ID"
                value={id}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="text-center mb-3">
              {/* <label htmlFor="name" className="form-label">
                Name of the Employee
              </label> */}
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="text-center mb-3">
              {/* <label htmlFor="designation" className="form-label">
                Designation
              </label> */}
              <input
                type="text"
                className="form-control"
                id="designation"
                placeholder="Designation"
                value={designation}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="text-center mb-3">
              {/* <label htmlFor="domain" className="form-label">
                Domain
              </label> */}
              <input
                type="text"
                className="form-control"
                id="domain"
                placeholder="Domain"
                value={domain}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="text-center mb-3">
              {/* <label htmlFor="experience" className="form-label">
                Experience
              </label> */}
              <input
                type="text"
                className="form-control"
                id="experience"
                placeholder="Overall Experience ( in years )"
                value={experience}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="text-center mb-3">
              {/* <label htmlFor="project_manager" className="form-label">
                Project Manager
              </label> */}
              <input
                type="text"
                className="form-control"
                id="manager"
                placeholder="Project Manager"
                value={manager}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="terms"
                    />
                    <label className="custom-control-label p-2" htmlFor="terms">
                      I agree with the terms and conditions
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="container"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button type="submit" className="btn btn-outline-primary mx-3">
                Submit
              </button>
              <Link className="btn btn-outline-danger" to="/">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
