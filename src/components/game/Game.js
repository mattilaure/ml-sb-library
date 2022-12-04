import React, { useState, useEffect } from "react";
import { ImageBackground, View, Image, Text } from "react-native";
import { randomize } from "../utils/utils";
import { style } from "./gameStyle";
import { CARDS } from "../assets/images/index";
import { useSelector } from "react-redux";
import Button from "../button/Button";
import { deleteLobby } from "../services/api/lobby/lobbyApi.js";
import { useNavigate, useLocation } from "react-router-dom";
import { styles } from "../button/buttonStyle";
import ModalCustom from "../modal/ModalCustom";
import trophy from "../assets/images/trophy-icon.png";

let ws = null;

function Game() {
  const navigate = useNavigate();
  const location = useLocation();

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

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const currentUserId = useSelector((state) => state.userDuck.user.id);

  useEffect(() => {
    connectWs();
    requestCard();
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  function connectWs() {
    ws = new WebSocket(
      "ws://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws"
    );
    ws.onopen = (event) => {
      console.log("connessione game aperta");
    };

    ws.onmessage = function (event) {
      console.log("messaggio ricevuto");
      let temp = state;
      const obj = JSON.parse(event.data);
      if (obj.hasOwnProperty("ended")) {
        if (obj.winners.length >= 1 && obj.ended) {
          setModalIsVisible(true);
        }
        console.log("object in game is", obj);
        temp = obj;
      }
      setState(temp);
    };

    ws.onclose = function (event) {};

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

  function stopPlaying() {
    const message = {
      user_id: currentUserId,
      method: "stopPlaying",
    };

    sendMessage(message);
    setTimeout(() => {
      checkEndMatch();
    }, 100);
  }

  function handleCardClick() {
    requestCard();
  }

  async function exitLobby() {
    const resp = await deleteLobby();
    if (resp.status === 200) {
      navigate("/");
    }
  }

  //mappa i giocatori partecipanti
  function mapHands(hand, key) {
    return (
      <View key={key} style={style.playerHand}>
        <View style={style.handButtons}>
          {hand.turn === true && hand.user.id === currentUserId && (
            <>
              <Button label="carta" callback={handleCardClick} />
              <Button label="stai" callback={stopPlaying} />
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

  function mapWinners(user, index) {
    return <Text key={index + Date.now()}>{user.username}</Text>;
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
      <Button label="Esci" callback={exitLobby} />
      {/* <Button label="carte" callback={requestCard} />
      <Button label="stai" callback={stopPlaying} />  */}
      <View style={style.buttons}></View>
      <ModalCustom visible={modalIsVisible} animation="slide">
        <View style={style.modal}>
          <Text style={style.winnerText}>CONGRATULAZIONI!</Text>
          <Text style={style.winnerText}>{state.winners.map(mapWinners)}</Text>
          <Image
            source={trophy}
            resizeMode="contain"
            style={{
              width: 112,
              height: 112,
              marginTop: 30
            }}
          />
         <Button label="Torna alla lobby" callback={exitLobby} />
        </View>
      </ModalCustom>
    </View>
  );
}

export default Game;
