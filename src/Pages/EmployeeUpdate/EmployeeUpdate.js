import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { updateEmployees } from "../../Redux/Action/employeeSlice";

const EmployeeUpdate = () => {
  const [updateData, setUpdateData] = useState({});
  const id = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const URL = `${process.env.REACT_APP_URL}`;

  // Employee Signle Id data Load
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${URL}/${id.id}`);
      try {
        const result = await res.data;
        setUpdateData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [URL, id.id]);

  // Employee Update Functionality

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleUpdateEmployee = async (e) => {
    e.preventDefault();
    const res = await axios.put(`${URL}/${id.id}`, updateData);
    try {
      const result = await res.data;
      dispatch(updateEmployees(result));
    } catch (error) {
      console.log(error);
    }

    navigate(`/`);
  };

  return (
    <>
      <div className="section">
        <h3 className="text-center text-info-emphasis mb-4">
          Employee Update Form
        </h3>

        <div style={{ margin: "3rem 0rem" }}>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12"></div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <form onSubmit={handleUpdateEmployee}>
                <div className="form-floating mb-3 ">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Name"
                    required
                    name="name"
                    value={updateData && updateData.name}
                    onChange={newData}
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
                    value={updateData && updateData.email}
                    onChange={newData}
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
                    value={updateData && updateData.phone}
                    onChange={newData}
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
                    value={updateData && updateData.address}
                    onChange={newData}
                    style={{ border: "1px solid #0dcaf0" }}
                  />
                  <label for="floatingInput">Address</label>
                </div>

                <div className=" mb-3 ">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={updateData && updateData.gender === "Male"}
                      onChange={newData}
                      id="flexRadioDefault1"
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
                      name="gender"
                      value="Female"
                      checked={updateData && updateData.gender === "Female"}
                      onChange={newData}
                      id="flexRadioDefault1"
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
                      name="gender"
                      value="Others"
                      checked={updateData && updateData.gender === "Others"}
                      onChange={newData}
                      id="flexRadioDefault1"
                      style={{ border: "1px solid #0dcaf0", cursor: "pointer" }}
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Others
                    </label>
                  </div>
                </div>

                <div className="mt-4">
                  <button type="submit" className="btn btn-info">
                    Employee Update
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

export default EmployeeUpdate;
