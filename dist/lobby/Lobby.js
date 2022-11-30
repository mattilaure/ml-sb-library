"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _lobbyStyle = require("./lobbyStyle.js");
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//react-native

function Lobby() {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _lobbyStyle.styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _lobbyStyle.styles.lobbyBox
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, "Lobby")));
}
var _default = Lobby;
exports.default = _default;