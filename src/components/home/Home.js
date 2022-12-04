//React
import React, { useEffect, useState } from "react";

//React Native
import { View, Text, ImageBackground, Image } from "react-native";

//Custom Components
import Button from "../button/Button";
import TextField from "../textField/TextField";
import ModalCustom from "../modal/ModalCustom";
import Game from "../game/Game";

//Style
import { styles } from "./homeStyle.js";

//redux
import { useSelector } from "react-redux";

//assets
import background from "../assets/images/Cozy.jpg"

//api
import { createNewLobby, joinLobby } from "../services/api/lobby/lobbyApi";
import { useNavigate } from "react-router-dom";

//web socket
// import {sendMessage,connectWs, onMessage, readMessage} from "../utils/webSocket"

function Home() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    modalVisible: false,
    lobbyNumber: 0,
    textField: "",
  });

  let ws = null;

  const currentUserId = useSelector((state) => state.userDuck.user.id);
  console.log("currentUserId", currentUserId);

  async function createLobby() {
    const resp = await createNewLobby();
    console.log("resp", resp);
    if (resp.status === 200) {
      navigate("/lobby");
    }
  }

  function editUser() {
    setState({ ...state, modalVisible: !state.modalVisible });
  }

  function play() {
    createLobby();
  }

  function handleChange(e) {
    setState({ ...state, textField: e });
  }

  async function join() {
    if (state.textField !== null) {
      const resp = await joinLobby(state.textField);
      if (resp.status === 200) {
        navigate("/lobby");
      }
    }
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
            <Button label="LOGIN" callback={() => navigate("/login")} />
            <Button
              label="REGISTRATI"
              callback={() => navigate("/registration")}
            />
          </View>
          <Image
            source={require("../assets/images/LOGO.png")}
            resizeMode="contain"
            style={styles.logo}
          />
          <View style={styles.centralBox}>
            <ModalCustom visible={state.modalVisible} animation="fade">
              <View style={styles.modalCustom}>
                <Button label="ciao" callback={editUser} />
              </View>
            </ModalCustom>
            <View style={styles.centralBoxBackground}>
              <View style={styles.joinView}>
                <TextField
                  callback={handleChange}
                  placeholder="Inserisci lobby esistente"
                />
                <Button label="UNISCITI" callback={join} />
              </View>

              <Button label="CREA NUOVA LOBBY" callback={play} />
              <Button
                label="CLASSIFICA"
                style={{ marginTop: 10 }}
                callback={() => console.log("ciao")}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Home;
