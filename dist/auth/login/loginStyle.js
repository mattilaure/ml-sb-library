"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var screen = _reactNative.Dimensions.get("window");
console.log(screen);
var _default = _reactNative.StyleSheet.create({
  container: {
    marginTop: _reactNative.StatusBar.currentHeight,
    height: screen.height - 1,
    width: screen.width
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  signUpContainerWeb: {
    height: 350,
    width: 500,
    padding: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 8,
      height: 5
    },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    flexDirection: 'column'
  },
  title: {
    height: 'auto'
  },
  labelInput: {
    marginTop: 30
  },
  label: {
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  //mobile
  containerMobile: {
    marginTop: _reactNative.StatusBar.currentHeight,
    height: screen.height - 1,
    width: screen.width
  },
  imageMobile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  signUpContainerMobile: {
    height: 400,
    width: 300,
    padding: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 8,
      height: 5
    },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    flexDirection: 'column'
  },
  titleMobile: {
    height: 'auto'
  },
  labelInputMobile: {
    marginTop: 30
  },
  labelMobile: {
    marginBottom: 10
  }
});
exports.default = _default;