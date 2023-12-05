import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
// import authCustReducer from "../features/authSliceCustomer";

export const store = configureStore({
  reducer: {
    // auth: authCustReducer,
    auth: authReducer,
  },
});
