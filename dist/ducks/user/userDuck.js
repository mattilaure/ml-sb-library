"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUser = exports.setToken = exports.setRefreshToken = exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
var setUser = function setUser(user) {
  return function (dispatch) {
    try {
      return dispatch(setUserAction(user));
    } catch (error) {
      return console.error(error.message);
    }
  };
};
exports.setUser = setUser;
var setToken = function setToken(token) {
  return function (dispatch) {
    try {
      return dispatch(setTokenAction(token));
    } catch (error) {
      return console.error(error.message);
    }
  };
};
exports.setToken = setToken;
var setRefreshToken = function setRefreshToken(refreshToken) {
  return function (dispatch) {
    try {
      return dispatch(setRefreshTokenAction(refreshToken));
    } catch (error) {
      return console.error(error.message);
    }
  };
};
exports.setRefreshToken = setRefreshToken;
var userDuck = (0, _toolkit.createSlice)({
  name: "userDuck",
  initialState: {
    user: {},
    token: "",
    refreshToken: ""
  },
  reducers: {
    setUserAction: function setUserAction(state, action) {
      state.user = action.payload;
    },
    setTokenAction: function setTokenAction(state, action) {
      state.token = action.payload;
    },
    setRefreshTokenAction: function setRefreshTokenAction(state, action) {
      state.refreshToken = action.payload;
    }
  }
});
var _default = userDuck.reducer;
exports.default = _default;
var _userDuck$actions = userDuck.actions,
  setUserAction = _userDuck$actions.setUserAction,
  setTokenAction = _userDuck$actions.setTokenAction,
  setRefreshTokenAction = _userDuck$actions.setRefreshTokenAction;