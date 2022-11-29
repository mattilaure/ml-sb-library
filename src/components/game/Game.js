import React, { useState, useEffect } from "react";
import { randomize } from "../utils/utils";

//props.users[{user1}, {user2}, ecc.]
function Game(props) {
  const [state, setState] = useState({
    users: [
      {
        id: 1,
        username: "mattia",
        email: "gig@gmail.com",
        password: "ciao",
        score: 4,
        online: true,
      },
      {
        id: 2,
        username: "samuele",
        email: "gio@gmail.com",
        password: "ciao",
        score: 2,
        online: true,
      },
      {
        id: 3,
        username: "carlo",
        email: "gia@gmail.com",
        password: "ciao",
        score: 7,
        online: true,
      },
    ],
    hands: [],
    winners: [],
    ended: false,
  });

  const SETTEMMEZZO = 7.5;
  const SEEDS = ["SPADE", "COPPE", "DENARI", "BASTONI"];
  const FIGURES = ["RE", "FANTE", "CAVALLO", "NUMBER"];
  const VALUES = [1, 2, 3, 4, 5, 6, 7, 0.5, 0.5, 0.5];

  let alreadyDrawn = [];

  // const SEEDS = ["SPADE", "COPPE", "DENARI", "BASTONI"];
  // const FIGURES = ["RE", "FANTE", "CAVALLO", "NUMBER"];
  // const VALUES = [1, 2, 3, 4, 5, 6, 7, 0.5, 0.5, 0.5]

  useEffect(() => {
    setHands();
  }, []);

  function setHands() {
    let hands = [];
    props.users.forEach((elem) => {
      let newHand = {
        user: {},
        cards: [],
        cardValue: 0,
        continuePlaying: true,
        turn: false,
        underSetteMezzo: true,
      };
      newHand.user = elem;
      hands.push(newHand);
    });
    return hands;
  }

  function game() {}

  function generateCard() {
    let value = randomize(10);
    let seed = randomize(4);
    let figure = randomize(4);
    let newCard = {
      value: VALUES[value],
      seed: SEEDS[seed],
      figure: FIGURES[figure],
    };
    let isUnique = checkIfUnique(newCard);
    if (isUnique === true) {
      return newCard;
    } else {
      generateCard();
    }
  }

  function checkIfUnique(card) {
    let isUnique = true;
    if (alreadyDrawn === []) {
      alreadyDrawn.push(card);
    } else {
      alreadyDrawn.forEach((elem) => {
        if (
          elem.value === card.value &&
          elem.seed === card.seed &&
          elem.figure === card.figure
        ) {
          isUnique = false;
        }
      });
    }
    return isUnique;
  }

  //Il gioco deve svolgersi così: All'inizio il banco dà una carta a tutti i giocatori.
  //a turno ogni player sceglie se ottenere un'altra carta o fermarsi. Si somma il totale delle carte ottenute (figure valgono mezzo),
  //e se il totale è superiore a 7.5, il giocatore viene eliminato. La partita finisce quando tutti i giocatori rimasti hanno deciso di
  //fermarsi o vengono tutti eliminati. Il giocatore vincente è quello che si è avvicinato di più a 7.5, ma se tutti vengono eliminati
  //nessuno vince.
  return <div>Game</div>;
}

export default Game;
