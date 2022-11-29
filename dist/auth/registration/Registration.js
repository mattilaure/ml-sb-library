"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _registrationStyle = _interopRequireDefault(require("./registrationStyle"));
var _TextField = _interopRequireDefault(require("../../textField/TextField"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//components

//style

//components

function Registration() {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _registrationStyle.default.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: require("../../assets/images/christmas-background.jpg"),
    resizeMode: "cover",
    style: _registrationStyle.default.image
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _registrationStyle.default.title
  }, _reactNative.Platform.OS === "web" ? /*#__PURE__*/_react.default.createElement("h1", {
    style: {
      color: "white"
    }
  }, "Registrati") : /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, "Registrati")), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _registrationStyle.default.signUpContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _registrationStyle.default.labelInput
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _registrationStyle.default.label
  }, "Username"), /*#__PURE__*/_react.default.createElement(_TextField.default, {
    placeholder: "Inserisci username"
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _registrationStyle.default.labelInput
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _registrationStyle.default.label
  }, "Email"), /*#__PURE__*/_react.default.createElement(_TextField.default, {
    placeholder: "Inserisci email"
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _registrationStyle.default.labelInput
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _registrationStyle.default.label
  }, "Password"), /*#__PURE__*/_react.default.createElement(_TextField.default, {
    placeholder: "Inserisci password"
  })))));
}
var _default = Registration;
exports.default = _default;