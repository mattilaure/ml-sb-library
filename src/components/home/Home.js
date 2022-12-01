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

  function tempClick() {
    console.log("Functioning Button");
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
            <Button label="LOGIN" callback={tempClick} />
            <Button label="REGISTRATI" callback={tempClick} />
            <Button label="Impostazioni" callback={editUser} />
          </View>
          <View style={styles.centralBox}>
            <ModalCustom visible={state.modalVisible} animation="fade">
              <View style={styles.modalCustom}>
                <Button label="ciao" callback={editUser} />
              </View>
            </ModalCustom>
            <View style={styles.centralBoxBackground}>
              <Text>Sette e mezzo!</Text>
              <Button label="GIOCA" callback={tempClick} />
              <Button
                label="CLASSIFICA"
                style={{ marginTop: 10 }}
                callback={tempClick}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Home;
