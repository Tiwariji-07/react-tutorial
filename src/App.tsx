import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmployeesList from './pages/EmployeesList'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeDetails from './pages/EmployeeDetails'


function App() {

  return (
    <>
    {/* <EmployeesList/> */}
      <Routes>
        <Route path="/" element={<EmployeesList />} />
        <Route path="/details" element={<EmployeeDetails/>} />
      </Routes>
    </>
  )
}

export default App
