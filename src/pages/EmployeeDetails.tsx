import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { EmployeeType } from '../types';
import './EmployeeDetails.css'

function EmployeeDetails() {
    const navigate = useNavigate()
 const {state} = useLocation()
 const employeeData:EmployeeType = state
 console.log(employeeData);
  return (
    <div className="employee-details">
      <button className="back-button" onClick={()=>navigate(-1)}>← Back</button>
      <div className="employee-card">
        <div className="employee-info">
          <h2>{employeeData.firstname} {employeeData.lastname}</h2>
          <p><strong>Job Title:</strong> {employeeData.jobTitle}</p>
          <p><strong>Department:</strong> {employeeData.department.name}</p>
          <p><strong>Email:</strong> {employeeData.email}</p>
          <p><strong>Phone:</strong> {employeeData.phone}</p>
          <p><strong>Address:</strong> {employeeData.street}, {employeeData.city}, {employeeData.state}, {employeeData.zip}</p>
          <p><strong>Birthdate:</strong> {employeeData.birthdate}</p>
          <p><strong>Manager:</strong> {employeeData.employeeByManagerId?.firstname} {employeeData.employeeByManagerId?.lastname}</p>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDetails