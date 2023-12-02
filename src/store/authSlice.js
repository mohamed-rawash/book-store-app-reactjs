import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLogged: false, name: "Mohamed Rawash" },
  reducers: {
    logInOut: (state) => {
      state.isLogged = !state.isLogged
    }
  }
})


export const {logInOut} = authSlice.actions
export default authSlice.reducer