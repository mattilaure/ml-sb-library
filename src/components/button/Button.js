import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./buttonStyle.js";

function Button(props) {
  function handleCallback() {
    props.callback();
  }
  return (
    <TouchableOpacity onPress={handleCallback} style={styles.buttonBasic}>
      <Text style={styles.textBasic}>{props.label}</Text>
    </TouchableOpacity>
  );
}

export default Button;
