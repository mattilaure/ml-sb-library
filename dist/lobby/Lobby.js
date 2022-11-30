"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _lobbyStyle = require("./lobbyStyle.js");
var _reactNative = require("react-native");
var _Button = _interopRequireDefault(require("../button/Button"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//react-native

//components

function Lobby() {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _lobbyStyle.styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _lobbyStyle.styles.title
  }, "Lobby di gioco"), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _lobbyStyle.styles.lobbyBox
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: _lobbyStyle.styles.imgLeft,
    source: require('../../assets/baubles.png'),
    width: 100,
    height: 100,
    resizeMode: "contain"
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: _lobbyStyle.styles.imgRight,
    source: require('../../assets/baubles.png'),
    width: 100,
    height: 100,
    resizeMode: "contain"
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: _lobbyStyle.styles.imgCenter,
    source: require('../../assets/baubles.png'),
    width: 100,
    height: 100,
    resizeMode: "contain"
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _lobbyStyle.styles.player
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _lobbyStyle.styles.user
  }, "Player"), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _lobbyStyle.styles.greenCircle
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _lobbyStyle.styles.player
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _lobbyStyle.styles.user
  }, "Player"), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _lobbyStyle.styles.greenCircle
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _lobbyStyle.styles.player
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _lobbyStyle.styles.user
  }, "Player"), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _lobbyStyle.styles.greenCircle
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _lobbyStyle.styles.btnContainer
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    label: "Gioca"
  }))));
}
var _default = Lobby;
exports.default = _default;