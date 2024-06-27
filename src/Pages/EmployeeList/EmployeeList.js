import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";
import {
  deleteEmployees,
  getEmployees,
} from "../../Redux/Action/employeeSlice";

const EmployeeList = () => {
  const [genderFilter, setGenderFilter] = useState("");
  const [searchData, setSearchData] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const URL = `${process.env.REACT_APP_URL}`;
  const employees = useSelector((state) => state.app.employees);

  // Employee Data Load Function
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${URL}`);
      try {
        const result = await res.data;
        dispatch(getEmployees(result));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [dispatch, URL]);

  // Employee Delete Function
  const handleEmployeeDelete = async (id) => {
    const res = await axios.delete(`${URL}/${id}`);
    try {
      if (res) {
        dispatch(deleteEmployees({ id }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="section">
        <div className="d-flex flex-wrap justify-content-start align-items-center">
          <button
            type="button"
            className="btn btn-info mt-4 me-4"
            onClick={() => navigate(`/employee-add`)}
          >
            Employee Add &nbsp; <i className="fa-solid fa-plus"></i>
          </button>

          <div className="mt-4 me-4">
            <select
              className="form-select"
              aria-label="Default select example"
              style={{ border: "1px solid #0dcaf0" }}
              onChange={(e) => setGenderFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="mt-4">
            <input
              className="form-control "
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearchData(e.target.value)}
              style={{ border: "1px solid #0dcaf0" }}
            />
          </div>
        </div>

        <div style={{ margin: "4rem 0rem" }}>
          <table className="table">
            <thead>
              <th>S. No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Action</th>
            </thead>
            <tbody>
              {employees &&
                employees
                  .filter((item) => {
                    if (genderFilter === "Male") {
                      return item.gender === genderFilter;
                    } else if (genderFilter === "Female") {
                      return item.gender === genderFilter;
                    } else if (genderFilter === "Others") {
                      return item.gender === genderFilter;
                    } else return item;
                  })
                  .filter((item) => {
                    if (searchData === "") {
                      return item;
                    } else {
                      return item.name
                        .toLowerCase()
                        .includes(searchData.toLowerCase());
                    }
                  })
                  .map((item, index) => (
                    <tr key={item.id}>
                      <td data-label="S. No.">{index + 1}</td>
                      <td data-label="Name">{item.name}</td>
                      <td data-label="Email">{item.email}</td>
                      <td data-label="Phone">{item.phone}</td>
                      <td data-label="Gender">{item.gender}</td>
                      <td data-label="Address">{item.address}</td>
                      <td data-label="Action">
                        <i
                          className="fa-solid fa-pen-to-square"
                          style={{
                            fontSize: "1.4rem",
                            color: "green",
                            margin: "0px 30px 0px 0px",
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            navigate(`/employee-update/${item.id}`)
                          }
                        ></i>
                        <i
                          className="fa-solid fa-trash"
                          style={{
                            fontSize: "1.2rem",
                            color: "red",

                            cursor: "pointer",
                          }}
                          onClick={() => handleEmployeeDelete(item.id)}
                        ></i>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EmployeeList;
