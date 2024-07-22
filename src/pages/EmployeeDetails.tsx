import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function EmployeeDetails() {
 const {state} = useLocation()
 const employeeData = state
 console.log(employeeData);
  return (
    <div>
        <h1>Details</h1>
    </div>
  )
}

export default EmployeeDetails