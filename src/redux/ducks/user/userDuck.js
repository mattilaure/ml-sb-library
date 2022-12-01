import { createSlice } from "@reduxjs/toolkit";

export const setUser = (user) => (dispatch) => {
  try {
    return dispatch(setUserAction(user));
  } catch (error) {
    return console.error(error.message);
  }
};

export const setToken = (token) => (dispatch) => {
  try {
    return dispatch(setTokenAction(token));
  } catch (error) {
    return console.error(error.message);
  }
};

export const setRefreshToken = (refreshToken) => (dispatch) => {
  try {
    return dispatch(setRefreshTokenAction(refreshToken));
  } catch (error) {
    return console.error(error.message);
  }
};

const userDuck = createSlice({
  name: "userDuck",
  initialState: {
    user: {},
    token: "",
    refreshToken: ""
  },
  reducers: {
    setUserAction: (state, action) => {
      state.user = action.payload;
    },
    setTokenAction: (state,action) =>{
      state.token = action.payload;
    },
    setRefreshTokenAction: (state,action) =>{
      state.refreshToken = action.payload;
    }
  },
});

export default userDuck.reducer;

const { setUserAction,setTokenAction,setRefreshTokenAction } = userDuck.actions;
