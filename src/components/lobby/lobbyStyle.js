import { StyleSheet, Dimensions } from "react-native";

let dimensions = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: dimensions.width,
    height: dimensions.height,
    backgroundColor: "#702632",
    justifyContent: "center",
    alignItems: "center",
  },
  lobbyBox: {
    display: "flex",
    backgroundColor: "#EB8258",
    width: "50%",
    height: "50%"
  },
  user: {},
});
