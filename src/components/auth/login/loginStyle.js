import { StyleSheet,Dimensions,StatusBar } from "react-native";

const screen = Dimensions.get("window");
console.log(screen);

export default StyleSheet.create({
    
    container:{
        marginTop: StatusBar.currentHeight, 
        height: screen.height - 1,
        width: screen.width,
    },
    image:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },
    signUpContainerWeb:{
        height: 350,
        width: 500,
        padding:30,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset: {width: 8,height:5},
        shadowOpacity: 0.9,
        shadowRadius: 3,
        flexDirection: 'column',
    },
    title:{
        height:'auto'
    },
    labelInput:{
        marginTop: 30
    },
    label:{
        marginBottom: 10
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent:'center',
        marginTop: 20
    },

    //mobile
    containerMobile:{
        marginTop: StatusBar.currentHeight, 
        height: screen.height - 1,
        width: screen.width,
    },
    imageMobile:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },
    signUpContainerMobile:{
        height: 400,
        width: 300,
        padding:30,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset: {width: 8,height:5},
        shadowOpacity: 0.9,
        shadowRadius: 3,
        flexDirection: 'column',
    },
    titleMobile:{
        height:'auto'
    },
    labelInputMobile:{
        marginTop: 30
    },
    labelMobile:{
        marginBottom: 10
    }

})

