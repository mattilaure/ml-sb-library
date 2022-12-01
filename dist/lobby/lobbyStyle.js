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
    height: dimensions.height - 1,
    backgroundColor: "#00763E",
    justifyContent: "center",
    alignItems: "center"
  },
  lobbyBox: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#BB2528",
    width: "70%",
    height: "70%",
    flexFlow: "column",
    padding: 50,
    borderColor: "#F4D10E",
    borderWidth: 10,
    borderStyle: "dotted",
    borderRadius: 20
  },
  user: {
    fontSize: 40,
    color: "white"
  },
  player: {
    flexDirection: "row",
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  greenCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: 'green',
    marginLeft: 10,
    marginTop: 10
  },
  title: {
    position: 'absolute',
    top: 20,
    width: 400,
    display: 'flex',
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: '#FFFAFA',
    color: '#BB2528',
    fontSize: 50
  },
  btnContainer: {
    position: 'absolute',
    bottom: 40
  },
  imgLeft: {
    height: 80,
    width: 80,
    position: 'absolute',
    left: 5,
    top: 0
  },
  imgRight: {
    height: 80,
    width: 80,
    position: 'absolute',
    right: 5,
    top: 0
  },
  imgCenter: {
    height: 80,
    width: 80,
    position: 'absolute',
    right: 500,
    top: 0
  }
});
exports.styles = styles;