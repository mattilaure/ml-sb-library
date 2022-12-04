import React, { useState, useEffect } from "react";
import { ImageBackground, View, Image, Text } from "react-native";
import { randomize } from "../utils/utils";
import { style } from "./gameStyle";
import { CARDS } from "../assets/images/index";
import { useSelector } from "react-redux";
import Button from "../button/Button";
import { deleteLobby } from "../services/api/lobby/lobbyApi.js";
import { useLocation } from "react-router-dom";

let ws = null;

function Game() {
  const location = useLocation();
  console.log(location);
  const CARTAPESCATA = {
    value: 0.5,
    seed: "COPPE",
    figure: "RE",
  };
  const [state, setState] = useState({
    hands: [],
    winners: [],
    users: [],
    ended: false,
  });

  const [ws, setWs] = useState(
    new WebSocket(
      "ws://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws"
    )
  );

  const [wsReady,setWsReady] = useState(false)

  const currentUserId = useSelector((state) => state.userDuck.user.id);

  useEffect(() => {
    ws.onopen = (event) => {
      setWsReady(true)
      sendMessage({
        user_id: currentUserId,
        method: "startMatch",
      });
      setTimeout(()=>{
        sendMessage({
          user_id: currentUserId,
          method: "requestCard",
        });
      },200)
      
    };

    ws.onmessage = function (event) {
      let temp = state;
      const obj = JSON.parse(event.data);
      if (obj.hasOwnProperty("ended")) {
        console.log("object in game is", obj);
        temp = obj;
      }
      setState(temp)
    };

    ws.onclose = function (event) {
     setWsReady(false);
      setTimeout(() => {
        setWs(
          new WebSocket(
            "ws://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws"
          )
        );
      }, 200);
    };

    ws.onerror = function (err) {
      console.log("Socket encountered error: ", err.message, "Closing socket");
      setWsReady(false);
      ws.close();
    };

    // return () => {
    //   ws.close();
    // };
  }, [ws]);

  // const connectWs = () => {
  //   ws = new WebSocket(
  //     "ws://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws"
  //   );

  //   ws.onopen = () => {
  //     console.log("CONNECTED TO GAME WS");
  //     setState({ ...state, wsReady: true });
  //   };
  //   ws.onmessage = (event) => {
  //     let temp = state;
  //     const obj = JSON.parse(event.data);
  //     if (obj.hasOwnProperty("ended")) {
  //       console.log("object in game is", obj);
  //       temp = obj;
  //     }
  //   };
  //   ws.onclose = () => {
  //     console.log("close");
  //     setTimeout(() => connectWs(), 200);
  //   };
  // };

  // useEffect(() => {
  //   sendMessage({
  //     user_id: currentUserId,
  //     method: "startMatch",
  //   });
  
  
  // }, []);

  const sendMessage = (message) => {
    if(state.wsReady){
      setTimeout(() => {
        ws.send(JSON.stringify(message));
      }, 200);
    }
  };

  function handleCardClick() {
    sendMessage({
      user_id: currentUserId,
      method: "requestCard",
    });
    sendMessage({
      user_id: 15,
      method: "checkEndMatch",
    });
  }

  async function exitLobby() {
    const resp = await deleteLobby();
  }

  function game() {}

  function handleClick(currentHand) {}

  function handleStay(currentHand) {}

  function mapHands(hand, key) {
    return (
      <View key={key}>
        <Button label="carta" callback={handleCardClick} />
        <Button label="stai" callback={handleCardClick} />
        <Button label="esci" callback={exitLobby} />
        {hand.cards.map(mapCards)}
        {/* Invece del text qui dentro va fatto un altro map con le carte dell'utente*/}
        <Text>{hand.user.username}</Text>{" "}
      </View>
    );
  }

  function mapCards(card, key) {
    return (
      <Image
        resizeMode="contain"
        source={displayCard(card)}
        style={{ height: 300 }}
      />
    );
  }

  //Filtra carta non figura
  function filterNumbers(cardArray) {
    let card = null;
    card = CARDS.filter((elem) => {
      return (
        elem.NAME.includes(cardArray.value.toString()) &&
        elem.NAME.includes(cardArray.seed)
      );
    });
    console.log("numberCard", card);
    return card[0].CARD;
  }

  //Filtra carta per figura
  function filterFigures(cardArray) {
    let card = null;
    card = CARDS.filter((elem) => {
      return (
        elem.NAME.includes(cardArray.seed) &&
        elem.NAME.includes(cardArray.figure)
      );
    });
    console.log("figureCard", card[0].CARD);

    return card[0].CARD;
  }

  function drawFirst() {
   

    ws.onmessage = (event) => {
      let temp = state;
      const obj = JSON.parse(event.data);
      if (obj.hasOwnProperty("ended")) {
        console.log("object in game is", obj);
        temp = obj;
      }
      setState(temp);
    };
  }

  //Ottieni immagine carta
  function displayCard(card) {
    let cardToDisplay = null;
    if (card.value >= 1) {
      cardToDisplay = filterNumbers(card);
    } else {
      cardToDisplay = filterFigures(card);
    }
    return cardToDisplay;
  }

  return (
    <View style={style.gameContainer}>
      <View style={style.house}>
        <Image
          style={style.img}
          source={require("../assets/images/cards-deck.png.webp")}
          resizeMode="cover"
        />
      </View>
      <Image
        source={require("../assets/images/LOGO.png")}
        resizeMode="contain"
        style={{
          width: 500,
          height: 200,
          opacity: 0.3,
          position: "absolute",
          top: "35%",
        }}
      />
      <View style={style.players}>{state?.hands?.map(mapHands)}</View>
      <Button label="carta" callback={handleCardClick} />
      <Button label="stai" callback={handleCardClick} />
      <Button label="esci" callback={exitLobby} />
    </View>
  );
}

export default Game;
