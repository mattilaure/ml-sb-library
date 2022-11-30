//React
import React, { useEffect, useState } from "react";

//React Native
import { View, Text, ImageBackground, Platform } from "react-native";

//Custom Components
import Button from "../button/Button";
import TextField from "../textField/TextField";
import ModalCustom from "../modal/ModalCustom";
import Game from "../game/Game";

//Style
import { styles } from "./homeStyle.js";

//Assets
import background from "../../assets/Cozy.jpg";

function Home() {
  const [state, setState] = useState({
    modalVisible: false,
  });

  useEffect(() => {}, []);

  function editUser() {
    setState({ ...state, modalVisible: !state.modalVisible });
  }
  return (
    <View style={styles.container}>
      
        <ImageBackground
          source={background}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.greyBox}>
          <View style={styles.sideBox}>
            <Button label="LOGIN" />
            <Button label="REGISTRATI" />
            <Button label="Impostazioni" />
          </View>
          <View style={styles.centralBox}>
            <ModalCustom visible={state.modalVisible} animation="fade">
              <Button label="ciao" callback={editUser} />
            </ModalCustom>
            <View style={styles.centralBoxBackground}>
              <Text>Sette e mezzo!</Text>
              <Button label="GIOCA" />
              <Button label="CLASSIFICA" style={{ marginTop: 10 }} />
            </View>
          </View>
          </View>
        </ImageBackground>
    </View>
  );
}

export default Home;
