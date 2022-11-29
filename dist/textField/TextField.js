"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _textFieldStyle = require("./textFieldStyle.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function TextField(props) {
  function handleChangeText(e) {
    props.callback(e);
  }
  return /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
    onChangeText: handleChangeText,
    placeholder: props.placeholder,
    style: _textFieldStyle.styles.textInput
  });
}
var _default = TextField;
exports.default = _default;