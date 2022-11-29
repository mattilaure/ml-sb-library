import React from "react";
import { Modal } from "react-native";
import { styles } from "./modalCustomStyle";

//props accettate: props.animation, .visible, .onShow, .onDismiss

function ModalCustom(props) {
  return (
    <Modal
      animationType={props.animation}
      visible={props.visible}
      onShow={props.onShow}
      onDismiss={props.onDismiss}
      style={styles.modalCustom}
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
