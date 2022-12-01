import React from "react";
import { Modal } from "react-native";
import { modalStyles } from "./modalCustomStyle";

//props accettate: props.animation, .visible, .onShow, .onDismiss

function ModalCustom(props) {
  return (
    <Modal transparent={true}
      animationType={props.animation}
      visible={props.visible}
      onShow={props.onShow}
      onDismiss={props.onDismiss}
    >
      {props.children}
    </Modal>
  );
}

export default ModalCustom;

ModalCustom.defaultProps = {
  animation: "none",
  visible: "false",
  onShow: () => {},
  onDismiss: () => {},
};
