import React from "react";
import { TextInput } from "react-native";
import { styles } from "./textFieldStyle.js"

function TextField(props) {
  function handleChangeText(e) {
    props.callback(e);
  }
  return <TextInput onChangeText={handleChangeText} placeholder={props.placeholder} style={styles.textInput} />;
}

export default TextField;


