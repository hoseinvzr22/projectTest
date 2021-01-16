import React, { useState } from "react";
import { Link } from "react-router-dom";

const Persons = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("firstname", firstname);
    localStorage.setItem("lastname", lastname);
    setFirstName("");
    setLastName("");
  };
  return (
    <div className="bg-light">
      <form onSubmit={handleSubmit}>
        <div className=" w-50 mx-auto my-3 form-group">
          <label className="col-form-label">FirstName :</label>
          <input
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="w-50 mx-auto form-group">
          <label className="col-form-label">LastName :</label>
          <input
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="w-50 mx-auto">
          <button className="btn btn-success">sumbit form</button>
          <div className="mx-auto">
            <li className="nav-item list-unstyled">
              <Link className="nav-link" to="/show-information">
                go to user info
              </Link>
            </li>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Persons;
