import React, { useEffect, useState } from "react";
import Employees from "../assets/data.json";
import { getAllEmployees, getEmployees } from "../assets/getEmployees";
import EmployeeCard from "../components/employeeCard/EmployeeCard";
import { EmployeeType } from "../types";

function EmployeesList() {
  const [employees, setEmployees] = useState<EmployeeType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  //   const getAccountsData = async () => {
  //     setIsLoading(true);
  //     const data = await getAllEmployees();
  //     setEmployees(data);
  //     // console.log(data);
  //     setIsLoading(false);
  //   };

  useEffect(() => {
    // getAccountsData()
    setEmployees(Employees)
  }, []);
  return (
    <>
      <h1>Employees List</h1>
      <div
        className="listContainer"
        style={{ display: "flex", flexWrap: "wrap", gap: "24px"}}
      >
        {employees.map((employee, index) => {
          return <div style={{flex:"1"}}>
          <EmployeeCard {...employee} key={index} />
          </div>
        })}
      </div>
    </>
  );
}

export default EmployeesList;
