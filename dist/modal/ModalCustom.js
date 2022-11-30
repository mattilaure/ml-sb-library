"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _modalCustomStyle = require("./modalCustomStyle");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//props accettate: props.animation, .visible, .onShow, .onDismiss

function ModalCustom(props) {
  return /*#__PURE__*/_react.default.createElement(_reactNative.Modal, {
    animationType: props.animation,
    visible: props.visible,
    onShow: props.onShow,
    onDismiss: props.onDismiss,
    style: _modalCustomStyle.styles.modalCustom
  }, props.children);
}
var _default = ModalCustom;
exports.default = _default;
ModalCustom.defaultProps = {
  animation: "none",
  visible: "false",
  onShow: function onShow() {},
  onDismiss: function onDismiss() {}
};