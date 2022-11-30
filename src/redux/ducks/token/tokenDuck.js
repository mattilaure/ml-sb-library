import { createSlice } from "@reduxjs/toolkit";

export const setToken = (token) => (dispatch) => {
  try {
    return dispatch(setTokenAction());
  } catch (error) {
    return console.error(error.message);
  }
};

const tokenDuck = createSlice({
  name: "tokenDuck",
  initialState: {
    token: "",
  },
  reducers: {
    setTokenAction: (state, action) => {
      state.token = action.payload;
    },
  },
});

export default tokenDuck.reducer;

const { setTokenAction } = tokenDuck.actions;
