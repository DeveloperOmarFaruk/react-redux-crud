import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import EmployeeList from "./Pages/EmployeeList/EmployeeList";
import EmployeeAdd from "./Pages/EmployeeAdd/EmployeeAdd";
import EmployeeUpdate from "./Pages/EmployeeUpdate/EmployeeUpdate";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<EmployeeList />} />
        <Route path="/employee-add" element={<EmployeeAdd />} />
        <Route path="/employee-update/:id" element={<EmployeeUpdate />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
export default App;
