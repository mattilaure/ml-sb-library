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

//redux
import { useSelector } from "react-redux";

let ws = null;
let startMatchMessage = null;

function Lobby() {
  const [state, setState] = useState({
    users: [],
  });

  const navigate = useNavigate();
  const currentUserId = useSelector((state) => state.userDuck.user.id);

  const connectWs = () => {
    ws = new WebSocket(
      "ws://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws"
    );
    ws.onopen = () => {
      console.log("CONNECTED TO LOBBY WS");
      sendMessage({
        method: "connectLobby",
        user_id: currentUserId,
      });
    };
    ws.onmessage = (event) => {
      console.log("onmessage", event);
      const obj = JSON.parse(event.data);
      if (obj.hasOwnProperty("winners")) {
        navigate("/game", { state: obj });
      }
      setState({
        ...state,
        users: obj.users,
      });
    };
    ws.onclose = () => {
      console.log('close lobby WS');
    }
  };

  useEffect(() => {
    connectWs();
    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = (message) => {
    setTimeout(() => {
      ws.send(JSON.stringify(message));
    }, 200);
  };

  async function exitLobby() {
    const resp = await deleteLobby();
    if (resp.status === 200) {
      navigate("/");
    }
  }

  const mappingUsers = (user, index) => {
    return (
      <View style={styles.player} key={index + Date.now()}>
        <Text style={styles.user}>{user?.username}</Text>
        <View style={styles.greenCircle}></View>
      </View>
    );
  };

  const handlePlay = () => {
    if (state.users.length >= 2) {
      const message = {
        user_id: currentUserId,
        method: "startMatch",
      };
      sendMessage(message);
    } else {
      console.log("Bisogna essere almeno in due per giocare");
    }
  };

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
        {state.users.map(mappingUsers)}

        {/* play */}
        <View style={styles.btnContainer}>
          <Button label="Gioca" callback={handlePlay} />
        </View>

        <Button label="Exit" callback={exitLobby} />
      </View>
    </View>
  );
}

export default Lobby;
