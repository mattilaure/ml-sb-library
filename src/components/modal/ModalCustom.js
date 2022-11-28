import React from "react";
import { Modal } from "react-native";

//props accettate: props.animation, .visible, .onShow, .onDismiss

function ModalCustom() {
  return (
    <Modal
      animationType={props.animation}
      visible={props.visible}
      onShow={props.onShow}
      onDismiss={props.onDismiss}
    />
  );
}

export default ModalCustom;

ModalCustom.defaultProps = {
  animation: "none",
  visible: "false",
  onShow: () => {},
  onDismiss: () => {},
};
