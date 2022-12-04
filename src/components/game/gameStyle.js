import { StyleSheet, Dimensions } from "react-native";

let screen = Dimensions.get("window");

export const style = StyleSheet.create({
  gameContainer: {
    width: screen.width,
    height: screen.height - 1,
    backgroundColor: "#00763E",
    alignItems: "center",
  },
  house: {
    width: 200,
    height: 200,
  },
  img: {
    flex: 1,
  },
  players: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 30,
    borderColor: "black",
    borderWidth: 2,
  },
  test: {
    height: 200,
    width: 200,
    backgroundColor: "red",
  },
  playerHand: { borderColor: "black", borderWidth: 2, maxWidth: 500, maxHeight: "100%", justifyContent: "center"},
  handButtons: {width: 200},
  cardImages: { display: "flex", flexDirection: "row", flexWrap: "wrap"},
  card:{height: 150, width:100},
  username: {},
});
