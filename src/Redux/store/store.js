import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "../Action/employeeSlice";

const store = configureStore({
  reducer: {
    app: employeeSlice,
  },
});

export default store;
