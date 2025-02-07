import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import registrationSlice from "../components/Register/RegistrationSlice";
// import loginSlice from "../components/Login/LoginSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    register: registrationSlice,
    // login: loginSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
