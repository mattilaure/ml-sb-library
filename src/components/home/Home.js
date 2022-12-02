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

//redux
import { useSelector } from "react-redux";

//Assets
import background from "../../assets/Cozy.jpg";

//api
import { createNewLobby } from "../services/api/lobby/lobbyApi";

//web socket
// import {sendMessage,connectWs, onMessage, readMessage} from "../utils/webSocket"

function Home() {
  const [state, setState] = useState({
    modalVisible: false,
  });

  let ws = null;

  const currentUserId = useSelector((state)=>state.userDuck.user.id);

  useEffect(() => {
    createLobby();
  }, []);

  async function createLobby(){
    const resp = await createNewLobby();
    if(resp.status === 200){
      //navigate to lobby page
    }
  }

  const connectWs = () => {
    ws = new WebSocket("ws://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws");
    ws.onopen = ()=>{
      console.log('CONNECTED TO WS');
    }
    ws.onmessage = (event) => {
      console.log("messaggio");
    }
}

const sendMessage = (message) =>{
  setTimeout(() => {
      ws.send(JSON.stringify(message));
   }, 200);
}

  function editUser() {
    setState({ ...state, modalVisible: !state.modalVisible });
  }

  function play() {
    connectWs();
    sendMessage({
      "user_id": currentUserId,
      "method": "connectLobby"
    })
 
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
            <Button label="LOGIN" callback={()=>console.log('ciao')} />
            <Button label="REGISTRATI" callback={()=>console.log('ciao')} />
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
              <Button label="GIOCA" callback={play} />
              <Button
                label="CLASSIFICA"
                style={{ marginTop: 10 }}
                callback={()=>console.log('ciao')}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Home;
