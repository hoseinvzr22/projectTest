import React from "react";
import { Link, withRouter, Redirect } from "react-router-dom";

const Show = ({ history, countrys, country }) => {
  const firstname = localStorage.getItem("firstname");
  const lastname = localStorage.getItem("lastname");
  const handledelete = () => {
    localStorage.removeItem("firstname");
    localStorage.removeItem("lastname");
    history.push("/");
  };
  if (!firstname) {
    return <Redirect to="/" />;
  }
  if (!lastname) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div className="mx-auto w-50 bg-light">
        <p>my firstname is : {firstname}</p>
        <p>my lastname is :{lastname}</p>

        <div className="mx-auto">
          <li className="nav-item list-unstyled">
            <Link className="nav-link" to="/">
              go to home page
            </Link>
          </li>
        </div>
        <button onClick={handledelete} className="btn btn-danger mt-4">
          delete from localStorage
        </button>
      </div>
      <hr />
      <div className="mx-auto text-center">
        <select>
          {countrys.map((cy) => (
            <option key={cy.name}>{cy.name}</option>
          ))}
        </select>
        <hr />
        <div className="w-50 mx-auto my-4 card bg-danger">{country.confirmed.value}</div>
        <div className="w-50 mx-auto my-4 card bg-success">{country.recovered.value}</div>
        <div className="w-50 mx-auto my-4 card bg-warning">{country.deaths.value}</div>
      </div>
    </div>
  );
};

export default withRouter(Show);
