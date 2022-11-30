"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomize = randomize;
function randomize(num) {
  var random = Math.floor(Math.random() * num);
  return random;
}