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

  },
  test: {
    height: 200,
    width: 200,
    backgroundColor: "red",
  },
  playerHand: {  maxWidth: 500, maxHeight: "100%", justifyContent: "center"},
  handButtons: {flexDirection: 'row',gap:10,marginBottom: 10,justifyContent:'center'},
  cardImages: { display: "flex", gap: 10, flexDirection: "row", flexWrap: "wrap",justifyContent:'center'},
  card:{height: 150, width:100},
  username: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },
  modal:{
    alignSelf: 'center',
    justifySelf: 'center',    
    height: '50%',
    width: '50%',
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems:'center'
  }
});
