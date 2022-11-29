//React
import React, { useEffect, useState } from "react";

//Navigation
import { useNavigate } from "react-router-dom";

//React Native
import { View, Text, ImageBackground, Platform } from "react-native";

//Custom Components
import Button from "../button/Button";
import TextField from "../textField/TextField";
import ModalCustom from "../modal/ModalCustom";

//Style
import { styles } from "./homeStyle.js";

//Assets
import background from "../../assets/Cozy.jpg";

function Home() {
  const [state, setState] = useState({
    modalVisible: false,
  });
  const navigate = useNavigate();

  useEffect(() => {}, []);

  function goToLogin() {
    navigate("/login");
  }

  function goToSignup() {
    navigate("/registration");
  }

  function goToLobby() {
    navigate("/lobby");
  }

  function goToLeaderboard() {
    navigate("/leaderboard");
  }

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
        <View style={styles.sideBox}>
          <Button label="LOGIN" callback={goToLogin} />
          <Button label="REGISTRATI" callback={goToSignup} />
          <Button label="Impostazioni" callback={editUser} />
        </View>
        <View style={styles.centralBox}>
          <ModalCustom visible={state.modalVisible} animation="fade">
            <Button label="ciao" callback={editUser} />
          </ModalCustom>
          <View style={styles.centralBoxBackground}>
            <Text>Sette e mezzo!</Text>
            <Button
              label="GIOCA"
              callback={goToLobby}
              style={{ marginBottom: 10 }}
            />
            <Button
              label="CLASSIFICA"
              callback={goToLeaderboard}
              style={{ marginTop: 10 }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Home;
