import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addEmployees } from "../../Redux/Action/employeeSlice";

const EmployeeAdd = () => {
  const [employees, setEmployees] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const URL = `${process.env.REACT_APP_URL}`;

  // Employee Add Functionality

  const handleEmployeeAddChange = (e) => {
    setEmployees({ ...employees, [e.target.name]: e.target.value });
  };

  const handleEmployeeAdd = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${URL}`, employees);
    try {
      const result = await res.data;
      dispatch(addEmployees(result));
    } catch (error) {
      console.log(error);
    }

    navigate(`/`);
  };
  return (
    <>
      <div className="section">
        <h3 className="text-center text-info-emphasis mb-4">
          Employee Add Form
        </h3>

        <div style={{ margin: "3rem 0rem" }}>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12"></div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <form onSubmit={handleEmployeeAdd}>
                <div className="form-floating mb-3 ">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Name"
                    required
                    name="name"
                    onChange={handleEmployeeAddChange}
                    style={{ border: "1px solid #0dcaf0" }}
                  />
                  <label for="floatingInput">Name</label>
                </div>

                <div className="form-floating mb-3 ">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Email"
                    required
                    name="email"
                    onChange={handleEmployeeAddChange}
                    style={{ border: "1px solid #0dcaf0" }}
                  />
                  <label for="floatingInput">Email</label>
                </div>

                <div className="form-floating mb-3 ">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Phone"
                    required
                    name="phone"
                    onChange={handleEmployeeAddChange}
                    style={{ border: "1px solid #0dcaf0" }}
                  />
                  <label for="floatingInput">Phone</label>
                </div>

                <div className="form-floating mb-3 ">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Address"
                    required
                    name="address"
                    onChange={handleEmployeeAddChange}
                    style={{ border: "1px solid #0dcaf0" }}
                  />
                  <label for="floatingInput">Address</label>
                </div>

                <div className=" mb-3 ">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="flexRadioDefault1"
                      name="gender"
                      value="Male"
                      onChange={handleEmployeeAddChange}
                      style={{ border: "1px solid #0dcaf0", cursor: "pointer" }}
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Male
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="flexRadioDefault1"
                      name="gender"
                      value="Female"
                      onChange={handleEmployeeAddChange}
                      style={{ border: "1px solid #0dcaf0", cursor: "pointer" }}
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Female
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="flexRadioDefault1"
                      name="gender"
                      value="Others"
                      onChange={handleEmployeeAddChange}
                      style={{ border: "1px solid #0dcaf0", cursor: "pointer" }}
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Others
                    </label>
                  </div>
                </div>

                <div className="mt-4">
                  <button type="submit" className="btn btn-info">
                    Employee Add
                  </button>
                </div>
              </form>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeAdd;
