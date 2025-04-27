import { createSlice } from "@reduxjs/toolkit";

interface IAuthSlice {
  accessToken: string;
  email: string;
  firstName: string;
  isAuthenticated: boolean;
  lastName: string;
  role: string;
}

const initialState: IAuthSlice = {
  accessToken: "",
  email: "",
  firstName: "",
  isAuthenticated: false,
  lastName: "",
  role: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.accessToken = action.payload;
      state.isAuthenticated = true;
    },
    clearAuth: (state) => {
      Object.assign(state, initialState);
      localStorage.clear();
    },
    setUserDetails: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.role = action.payload.role;
    },
  },
});

export const { setToken, clearAuth, setUserDetails } = authSlice.actions;

export default authSlice.reducer;
