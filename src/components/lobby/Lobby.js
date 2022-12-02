import React, { useEffect, useState } from "react";
import { styles } from "./lobbyStyle.js";

//router dom
import { useNavigate } from "react-router-dom";

//react-native
import { View, Text, Image } from "react-native";

//components
import Button from "../button/Button";
import { deleteLobby } from "../services/api/lobby/lobbyApi.js";
import { Navigate } from "react-router-dom";

function Lobby() {
  const [state, setState] = useState({
    users: []
  });
  const navigate = useNavigate();
  let ws = null;

  ws = new WebSocket(
    "ws://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws"
  );
  ws.onopen = () => {
    console.log("CONNECTED TO WS");
  };

  ws.onerror = (error) => {
    console.error("error", error);
  };


useEffect(()=>{
  ws.onmessage = (event) => {
    const obj = JSON.parse(event.data);
    console.log(obj);
  };
})

function connectWs(){
  
}


 

  function sendMessage(message) {
    setTimeout(() => {
      this.ws.send(JSON.stringify(message));
    }, 200);
  }

  async function exitLobby(){
    const resp = await deleteLobby();
    if(resp.status === 200){
      navigate("/")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lobby di gioco</Text>
      <View style={styles.lobbyBox}>
        <Image
          style={styles.imgLeft}
          source={require("../assets/images/baubles.png")}
          width={100}
          height={100}
          resizeMode={"contain"}
        />
        <Image
          style={styles.imgRight}
          source={require("../assets/images/baubles.png")}
          width={100}
          height={100}
          resizeMode={"contain"}
        />
        <Image
          style={styles.imgCenter}
          source={require("../assets/images/baubles.png")}
          width={100}
          height={100}
          resizeMode={"contain"}
        />
        <View style={styles.player}>
          <Text style={styles.user}>Player</Text>
          <View style={styles.greenCircle}></View>
        </View>
        <View style={styles.player}>
          <Text style={styles.user}>Player</Text>
          <View style={styles.greenCircle}></View>
        </View>
        <View style={styles.player}>
          <Text style={styles.user}>Player</Text>
          <View style={styles.greenCircle}></View>
        </View>

        {/* play */}
        <View style={styles.btnContainer}>
          <Button label="Gioca" />
        </View>

        <Button label="Exit" callback={exitLobby}/>
      </View>
    </View>
  );
}

export default Lobby;
