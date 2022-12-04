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


  const currentUserId = useSelector((state) => state.userDuck.user.id);

  useEffect(() => {
    connectWs();
    requestCard();
  }, []);

  function connectWs(){
    ws.onopen = (event) => {
      console.log("connessione game aperta");
    };

    ws.onmessage = function (event) {
      console.log("messaggio ricevuto");
      let temp = state;
      const obj = JSON.parse(event.data);
      if (obj.hasOwnProperty("ended")) {
        console.log("object in game is", obj);
        temp = obj;
      }
      setState(temp);
    };

    ws.onclose = function (event) {

    };

    ws.onerror = function (err) {
      console.log("Socket encountered error: ", err.message, "Closing socket");
      ws.close();
    };
  }

  const sendMessage = (message) => {
      setTimeout(() => {
        ws.send(JSON.stringify(message));
      }, 200);
  };

  function requestCard() {
    const message = {
      user_id: currentUserId,
      method: "requestCard",
    };
    sendMessage(message);
    setTimeout(() => {
      checkEndMatch();
    }, 100);
  }

  function checkEndMatch() {
    const message = {
      user_id: currentUserId,
      method: "checkEndMatch",
    };

    sendMessage(message);
  }

  function handleCardClick() {
    requestCard();
  }

  async function exitLobby() {
    const resp = await deleteLobby();
  }

  //mappa i giocatori partecipanti
  function mapHands(hand, key) {
    return (
      <View key={key} style={style.playerHand}>
        <View style={style.handButtons}>
          {hand.turn === true && hand.user.id === currentUserId && (
            <>
              <Button label="carta" callback={handleCardClick} />
              <Button label="stai" callback={handleCardClick} />
            </>
          )}
        </View>

        <View style={style.cardImages}>{hand.cards.map(mapCards)}</View>
        <Text style={style.username}>{hand.user.username}</Text>
      </View>
    );
  }

  //mappa le immagini delle carte
  function mapCards(card, key) {
    return (
      <Image
        resizeMode="stretch"
        source={displayCard(card)}
        style={style.card}
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
