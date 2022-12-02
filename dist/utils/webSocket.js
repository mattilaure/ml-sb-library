"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMessage = exports.readMessage = exports.connectWs = void 0;
var ws = null;
var connectWs = function connectWs() {
  ws = new WebSocket("ws://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws");
  ws.onopen = function () {
    console.log('CONNECTED TO WS');
  };
};
exports.connectWs = connectWs;
var sendMessage = function sendMessage(message) {
  setTimeout(function () {
    ws.send(JSON.stringify(message));
  }, 200);
};
exports.sendMessage = sendMessage;
var readMessage = function readMessage() {
  ws.onMessage = function (event) {
    console.log(JSON.parse(event));
  };

  // const obj = JSON.parse(event.data);
  // if (obj.hasOwnProperty("idLobby")) {
  //    this.lobby = obj;
  // } else {
  //    if (this.match == null) {
  //       this.match = obj;
  //       setTimeout(() => {
  //          this.requestCard();
  //       }, 1000);
  //    } else {
  //       this.match = obj;
  //    }
  // }
};
exports.readMessage = readMessage;