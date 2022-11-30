import { StyleSheet, Dimensions } from "react-native";

let dimensions = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: dimensions.width,
    height: dimensions.height,
    backgroundColor: "#00763E",
    justifyContent: "center",
    alignItems: "center",
  },
  lobbyBox: {
    display: "flex",
    backgroundColor: "#BB2528",
    width: "70%",
    height: "70%",
    flexFlow: "column",
    padding: 50,
    borderColor: "#F4D10E",
    borderWidth: 10,
    borderStyle: "dotted",
    borderRadius: 20
  },
  user: { 
    marginTop: 10, 
    marginBottom: 10,
    fontSize: 40,
    color: "white"    
},
});
