import React from "react";
import {styles} from "./lobbyStyle.js";

//react-native
import { View, Text } from "react-native";

function Lobby() {
  return (
    <View style={styles.container}>
      <View style={styles.lobbyBox}>
        <Text>Lobby</Text>
      </View>
    </View>
  );
}

export default Lobby;
