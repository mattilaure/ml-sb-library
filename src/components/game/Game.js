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
    handsInGame: [],
    winners: [],
    userChoice: "",
    activePlayer: 0,
    ended: false,
  });


  const SETTEMMEZZO = 7.5;
  const SEEDS = ["SPADE", "COPPE", "DENARI", "BASTONI"];
  const FIGURES = ["RE", "FANTE", "CAVALLO", "NUMBER"];
  const VALUES = [1, 2, 3, 4, 5, 6, 7, 0.5, 0.5, 0.5];

  let alreadyDrawn = [];
  let turnCounter = 1;

  // const SEEDS = ["SPADE", "COPPE", "DENARI", "BASTONI"];
  // const FIGURES = ["RE", "FANTE", "CAVALLO", "NUMBER"];
  // const VALUES = [1, 2, 3, 4, 5, 6, 7, 0.5, 0.5, 0.5]

  useEffect(()=>{
    setHands()
  },[])

  useEffect(()=>{
    console.log("hands iniziali",state.handsInGame);
  },[state.handsInGame])

  function setHands() {
    let hands = [];
    state.users.forEach((elem) => {
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
    setState({
      ...state,
      handsInGame: hands
    })
  }

  function drawFirst() {
    //settiamo la prima carta per ciascun player
    state.handsInGame.forEach((hand) => {
      let newCard = generateCard();
      hand.cardValue += newCard.value
      hand.cards.push(newCard);
    });
  }

  function checkActiveUser(){
    let flag = false;
    state.handsInGame.forEach((hand)=>{
      if (hand.continuePlaying && hand.underSetteMezzo) {
        flag = true
      }
    })
    return flag
  }

  //GAME
  function game() {

    if(turnCounter===1){
      drawFirst()
    }
    if(checkActiveUser()){
      turnCounter ++;
      if(state.activePlayer === state.handsInGame.length){
        state.activePlayer = 0
      }
      handleClick(state.handsInGame[state.activePlayer])
  
      // handsGame.forEach((hand,index)=>{
      //   if(hand.continuePlaying && hand.underSetteMezzo){
      //     hand.turn = true
      //   }
      // })
      
    }else{
      setState({
        ...state,
        ended:true
      })
    }
  
   

  }

  function handleClick(currentHand){
    console.log(currentHand);
    // let handsCopy = state.hands;
    // console.log(handsCopy);
    let card = generateCard();
    currentHand.cards.push(card);
    currentHand.cardValue += card.value;

    setState({
      ...state,
      activePlayer: state.activePlayer + 1,
    })
  }

  function generateCard() {
    let value = randomize(10);
    let seed = randomize(4);
    let figure = "";
    switch(value){
      case 7: 
        figure = FIGURES[1]
        break;
      case 8: 
        figure = FIGURES[2]
        break;
      case 9: 
        figure = FIGURES[0]
        break;
      default:
          figure = FIGURES[3]
    }
    let newCard = {
      value: VALUES[value],
      seed: SEEDS[seed],
      figure: figure,
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
  return (
    <>
      <div>Game</div>
      <button onClick={game}>Gioca</button>

      
        <div>{state?.hands?.user?.username}</div>
      
    </>
  );
}

export default Game;
