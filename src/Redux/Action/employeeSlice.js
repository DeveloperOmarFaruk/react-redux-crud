import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employees",
  initialState: {
    employees: [],
  },

  reducers: {
    getEmployees: (state, action) => {
      state.employees = action.payload.map((employee) => {
        return {
          id: employee.id,
          name: employee.name,
          email: employee.email,
          phone: employee.phone,
          address: employee.address,
          gender: employee.gender,
        };
      });
    },

    addEmployees: (state, action) => {
      state.employees.push(action.payload);
    },

    updateEmployees: (state, action) => {
      const updateData = state.employees.findUpdateData(
        (item) => item.id === action.payload.id
      );
      state.employees[updateData] = {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
        address: action.payload.address,
        gender: action.payload.gender,
      };
    },

    deleteEmployees: (state, action) => {
      const id = action.payload.id;
      state.employees = state.employees.filter((item) => item.id !== id);
    },
  },
});

export const { getEmployees, addEmployees, updateEmployees, deleteEmployees } =
  employeeSlice.actions;

export default employeeSlice.reducer;
