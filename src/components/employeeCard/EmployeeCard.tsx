import React from "react";
import "./EmployeeCard.css";

import { EmployeeType } from "../../types";
import Person from '../../assets/person.jpg'
import { Link, useNavigate } from "react-router-dom";

function EmployeeCard(employee:EmployeeType) {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/details",{ state: employee })
    }
  return (
    <>
      <div className="card" onClick={handleClick}>
        <div><img className="img" src={Person} alt="" /></div>
        <div className="textBox">
          <div className="textContent">
            <p className="h1">
              {employee.firstname} {employee.lastname}
            </p>
            <span className="span">{employee.jobTitle}</span>
          </div>
          <p className="p">{employee.email}</p>
          <p className="p">{`${employee.street},${employee.city}, ${employee.state}, ${employee.zip}`}</p>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default EmployeeCard;
