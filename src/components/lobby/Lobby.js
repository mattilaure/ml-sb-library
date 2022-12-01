import React,{useEffect, useState} from "react";
import { styles } from "./lobbyStyle.js";

//react-native
import { View, Text,Image } from "react-native";


//components
import Button from "../button/Button";

function Lobby() {

  const [state,setState] = useState()
  let ws = null;

  function connectWs(){
    ws = new WebSocket("ws://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws");
    ws.onopen = ()=>{
      console.log('CONNECTED TO WS');
    }

  }

  function sendMessage(message){
    setTimeout(() => {
      this.ws.send(JSON.stringify(message));
   }, 200);
  }

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lobby di gioco</Text>
      <View style={styles.lobbyBox}>
      <Image 
        style={styles.imgLeft}
        source={require('../assets/images/baubles.png')}
        width={100}
        height={100}
        resizeMode={"contain"}
      />
      <Image 
        style={styles.imgRight}
        source={require('../assets/images/baubles.png')}
        width={100}
        height={100}
        resizeMode={"contain"}
      />
         <Image 
        style={styles.imgCenter}
        source={require('../assets/images/baubles.png')}
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
      </View>
    </View>
  );
}

export default Lobby;
