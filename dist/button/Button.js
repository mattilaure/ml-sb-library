"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _buttonStyle = require("./buttonStyle.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Button(props) {
  function handleCallback() {
    props.callback();
  }
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: handleCallback,
    style: _buttonStyle.styles.buttonBasic
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _buttonStyle.styles.textBasic
  }, props.label));
}
var _default = Button;
exports.default = _default;