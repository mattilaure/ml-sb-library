"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;
var _reactNative = require("react-native");
var SCREEN = _reactNative.Dimensions.get("window");
var styles = _reactNative.StyleSheet.create({
  container: {
    display: "flex",
    width: SCREEN.width,
    height: SCREEN.height - 1,
    position: "relative",
    flexDirection: "column"
  },
  centralBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "80%"
  },
  centralBoxBackground: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00763E",
    borderWidth: 5,
    borderColor: "#F4D103",
    width: "40%",
    height: "60%",
    gap: 20
  },
  sideBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    height: "10%",
    paddingRight: "2%"
  },
  greyBox: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backdropFilter: "blur(4px)"
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  modalCustom: {
    display: "flex",
    alignSelf: "center",
    backgroundColor: "red",
    borderWidth: 5,
    borderColor: "#d5b895",
    width: 500,
    height: 500
  }
});
exports.styles = styles;