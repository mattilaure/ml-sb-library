"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _utils = require("../utils/utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
//props.users[{user1}, {user2}, ecc.]
var turnCounter = 1;
function Game(props) {
  var _state$hands, _state$hands$user;
  var _useState = (0, _react.useState)({
      users: [{
        id: 1,
        username: "mattia",
        email: "gig@gmail.com",
        password: "ciao",
        score: 4,
        online: true
      }, {
        id: 2,
        username: "samuele",
        email: "gio@gmail.com",
        password: "ciao",
        score: 2,
        online: true
      }, {
        id: 3,
        username: "carlo",
        email: "gia@gmail.com",
        password: "ciao",
        score: 7,
        online: true
      }],
      handsInGame: [],
      winners: [],
      userChoice: "",
      activePlayer: 0,
      ended: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var SETTEMMEZZO = 7.5;
  var SEEDS = ["SPADE", "COPPE", "DENARI", "BASTONI"];
  var FIGURES = ["RE", "FANTE", "CAVALLO", "NUMBER"];
  var VALUES = [1, 2, 3, 4, 5, 6, 7, 0.5, 0.5, 0.5];
  var alreadyDrawn = [];

  // const SEEDS = ["SPADE", "COPPE", "DENARI", "BASTONI"];
  // const FIGURES = ["RE", "FANTE", "CAVALLO", "NUMBER"];
  // const VALUES = [1, 2, 3, 4, 5, 6, 7, 0.5, 0.5, 0.5]

  (0, _react.useEffect)(function () {
    setHands();
  }, []);
  (0, _react.useEffect)(function () {
    drawFirst();
    console.log("handsInGame", state.handsInGame);
  }, [state.handsInGame]);

  // useEffect(() => {
  //   console.log("hands iniziali", state.handsInGame);
  // }, [state.handsInGame]);

  function setHands() {
    var hands = [];
    state.users.forEach(function (elem) {
      var newHand = {
        user: {},
        cards: [],
        cardValue: 0,
        continuePlaying: true,
        turn: false,
        underSetteMezzo: true
      };
      newHand.user = elem;
      hands.push(newHand);
    });
    setState(_objectSpread(_objectSpread({}, state), {}, {
      handsInGame: hands
    }));
  }
  function drawFirst() {
    console.log("drawfirst");
    //settiamo la prima carta per ciascun player
    state.handsInGame.forEach(function (hand) {
      var newCard = generateCard();
      hand.cardValue += newCard.value;
      hand.cards.push(newCard);
    });
  }
  function checkActiveUser() {
    var flag = false;
    state.handsInGame.forEach(function (hand) {
      if (hand.continuePlaying && hand.underSetteMezzo) {
        flag = true;
      }
    });
    return flag;
  }

  //GAME
  function game() {
    if (checkActiveUser()) {
      turnCounter++;
      if (state.activePlayer === state.handsInGame.length) {
        state.activePlayer = 0;
      }
      handleClick(state.handsInGame[state.activePlayer]);
      handleStay(state.handsInGame[state.activePlayer]);

      // handsGame.forEach((hand,index)=>{
      //   if(hand.continuePlaying && hand.underSetteMezzo){
      //     hand.turn = true
      //   }
      // })
    } else {
      setState(_objectSpread(_objectSpread({}, state), {}, {
        ended: true
      }));
    }
  }
  function handleClick(currentHand) {
    var handsCopy = state.handsInGame;
    var card = generateCard();
    currentHand.cards.push(card);
    currentHand.cardValue += card.value;
    if (currentHand.cardValue > 7.5) {
      currentHand.underSetteMezzo = false;
    }
    handsCopy[state.activePlayer] = currentHand;
    console.log(handsCopy);
    setState(_objectSpread(_objectSpread({}, state), {}, {
      activePlayer: state.activePlayer + 1,
      handsInGame: handsCopy
    }));
  }
  function handleStay(currentHand) {
    var handsCopy = state.handsInGame;
    currentHand.continuePlaying = false;
    handsCopy[state.activePlayer] = currentHand;
    setState(_objectSpread(_objectSpread({}, state), {}, {
      handsInGame: handsCopy
    }));
  }
  function generateCard() {
    var value = (0, _utils.randomize)(10);
    var seed = (0, _utils.randomize)(4);
    var figure = "";
    switch (value) {
      case 7:
        figure = FIGURES[1];
        break;
      case 8:
        figure = FIGURES[2];
        break;
      case 9:
        figure = FIGURES[0];
        break;
      default:
        figure = FIGURES[3];
    }
    var newCard = {
      value: VALUES[value],
      seed: SEEDS[seed],
      figure: figure
    };
    var isUnique = checkIfUnique(newCard);
    if (isUnique === true) {
      return newCard;
    } else {
      generateCard();
    }
  }
  function checkIfUnique(card) {
    var isUnique = true;
    if (alreadyDrawn === []) {
      alreadyDrawn.push(card);
    } else {
      alreadyDrawn.forEach(function (elem) {
        if (elem.value === card.value && elem.seed === card.seed && elem.figure === card.figure) {
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, "Game"), /*#__PURE__*/_react.default.createElement("button", {
    onClick: game
  }, "Gioca"), /*#__PURE__*/_react.default.createElement("div", null, state === null || state === void 0 ? void 0 : (_state$hands = state.hands) === null || _state$hands === void 0 ? void 0 : (_state$hands$user = _state$hands.user) === null || _state$hands$user === void 0 ? void 0 : _state$hands$user.username));
}
var _default = Game;
exports.default = _default;