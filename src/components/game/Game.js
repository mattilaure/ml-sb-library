import React, { useState, useEffect } from "react";
import { ImageBackground, View, Image, Text } from "react-native";
import { randomize } from "../utils/utils";
import { style } from "./gameStyle";
import { CARDS } from "../assets/images/index";
import { useSelector } from "react-redux";

//props.users[{user1}, {user2}, ecc.]
let turnCounter = 1;
function Game(props) {
  const CARTAPESCATA = {
    value: 0.5,
    seed: "COPPE",
    figure: "RE",
  };
  const [state, setState] = useState({
    users: [],
    handsInGame: [],
    winners: [],
    // userChoice: "",
    // activePlayer: 0,
    // ended: false,
  });

  let ws = null;
  const currentUserId = useSelector((state) => state.userDuck.user.id);
  console.log(currentUserId);

  useEffect(() => {
    connectWs();
    sendMessage({
      method: "startMatch",
      user_id: currentUserId,
    });
    ws.onmessage = (event) => {
      const obj = JSON.parse(event.data);
      setState({
        ...state,
        users: obj.users,
      });
    };
  }, []);

  const connectWs = () => {
    ws = new WebSocket(
      "ws://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws"
    );
    ws.onopen = () => {
      console.log("CONNECTED TO WS");
    };
  };

  const sendMessage = (message) => {
    setTimeout(() => {
      ws.send(JSON.stringify(message));
    }, 200);
  };

  useEffect(() => {}, []);

  function game() {}

  function handleClick(currentHand) {}

  function handleStay(currentHand) {}

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
      <View style={style.players}>
        <View style={style.test}>
          <Image
            resizeMode="contain"
            source={displayCard(CARTAPESCATA)}
            style={{ height: 300 }}
          />
        </View>
        <View style={style.test}></View>
      </View>
    </View>
  );
}

export default Game;
