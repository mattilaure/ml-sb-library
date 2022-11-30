"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;
var _reactNative = require("react-native");
var dimensions = _reactNative.Dimensions.get("window");
var styles = _reactNative.StyleSheet.create({
  container: {
    display: "flex",
    width: dimensions.width,
    height: dimensions.height,
    backgroundColor: "#702632",
    justifyContent: "center",
    alignItems: "center"
  },
  lobbyBox: {
    display: "flex",
    backgroundColor: "#EB8258",
    width: "50%",
    height: "50%"
  },
  user: {}
});
exports.styles = styles;