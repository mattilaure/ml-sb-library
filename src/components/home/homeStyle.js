import { StyleSheet, Dimensions } from "react-native";

const SCREEN = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: SCREEN.width,
    height: SCREEN.height - 1,
    position: "relative",
    flexDirection: "column",
  },
  centralBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "70%",
  },
  centralBoxBackground: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00763E",
    borderWidth: 10,
    borderColor: "#F4D10E",
    borderStyle: "dotted",
    borderRadius: 20,
    width: "40%",
    height: "70%",
    gap: 50,
  },
  sideBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    height: "10%",
    paddingRight: "2%",
    gap: 20,
  },
  greyBox: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backdropFilter: "blur(4px)",
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  modalCustom: {
    display: "flex",
    alignSelf: "center",
    backgroundColor: "red",
    borderWidth: 5,
    borderColor: "#BB2528",
    width: 500,
    height: 500,
  },
  logo: {
    height: "20%",
  },
  joinView: {
    flexDirection: "row",
    gap: 15
  }
});
