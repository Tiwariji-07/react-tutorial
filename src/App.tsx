import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmployeesList from './pages/EmployeesList'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeDetails from './pages/EmployeeDetails'
import { Provider } from 'react-redux'
import { store } from './state/Store'


function App() {

  return (
    <>
    {/* <EmployeesList/> */}
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<EmployeesList />} />
        <Route path="/details" element={<EmployeeDetails/>} />
      </Routes>
      </Provider>
    </>
  )
}

export default App
