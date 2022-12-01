import { StyleSheet, Dimensions } from "react-native";

let screen = Dimensions.get("window");

export const style = StyleSheet.create({
    gameContainer:{
        width: screen.width,
        height: screen.height - 1,
        backgroundColor: "#00763E",
        alignItems:'center'
    },
    house:{
        width: 200,
        height:200,
    },
    img:{
       flex: 1,
      
    },
    players:{
        position:'absolute',
        bottom: 0,
        width:'100%',
        height: 300,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-around',
        padding: 30
    },
    test:{
        height: 100,
        width:100,
        backgroundColor: 'red'
    }
})