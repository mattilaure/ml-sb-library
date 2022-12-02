//React
import React, { useEffect, useState } from "react";

//React Native
import { View, Text, ImageBackground } from "react-native";

//Custom Components
import Button from "../button/Button";
import TextField from "../textField/TextField";
import ModalCustom from "../modal/ModalCustom";
import Game from "../game/Game";

//Style
import { styles } from "./homeStyle.js";

//redux
import { useSelector } from "react-redux";

//Assets
import background from "../../assets/Cozy.jpg";

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
  console.log("currentUserId",currentUserId);

  async function createLobby() {
    const resp = await createNewLobby();
    console.log("resp", resp);
    if (resp.status === 200) {
      //navigate to lobby page
    }
  }

  const connectWs = () => {
    ws = new WebSocket(
      "ws://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws"
    );
    ws.onopen = () => {
      console.log("CONNECTED TO WS");
    };
    ws.onmessage = (event) => {
      const obj = JSON.parse(event.data);
      console.log("event.data.lobbyNumber", obj.idLobby);
      setState(obj.idLobby);
    };
    ws.onerror = (error) => {
      console.error("error", error);
    };
  };

  const sendMessage = (message) => {
    setTimeout(() => {
      ws.send(JSON.stringify(message));
    }, 200);
  };

  function editUser() {
    setState({ ...state, modalVisible: !state.modalVisible });
  }

  function play() {
    createLobby();
    connectWs();
    sendMessage({
      user_id: currentUserId,
      method: "connectLobby",
    });
    navigate("/lobby");
  }

  function handleChange(e) {
    setState({ ...state, textField: e });
    
  }

  async function join() {
    if (state.textField !== null) {
      const resp = await joinLobby(state.textField);
      console.log(resp);
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
              <TextField
                callback={handleChange}
                placeholder="Inserisci lobby esistente"
              />
              <Button label="UNISCITI" callback={join} />
              <Button label="CREA LOBBY" callback={play} />
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
