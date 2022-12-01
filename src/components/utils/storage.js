import { Platform } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getFromStorage = async () => {

    if(Platform.OS === "web"){

        if(localStorage.getItem("token")){
            let token = JSON.parse(localStorage.getItem("token"));
            return token
        }else{
            localStorage.setItem("token","")
        }

        if(localStorage.getItem("refreshToken")){
            let refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
            return refreshToken
        }else{
            localStorage.setItem("refreshToken","")
        }

    }
    else if(Platform.OS === "ios" || Platform.OS === "android"){

        try{
            const jsonValue = await AsyncStorage.getItem('token')

            if(jsonValue !== null){
                return JSON.parse(jsonValue)
            }else{
                await AsyncStorage.setItem('token',"")
            }
        }catch(e){

            console.log(e);
        }

        try{
            const jsonValue = await AsyncStorage.getItem('refreshToken')

            if(jsonValue !== null){
                return JSON.parse(jsonValue)
            }else{
                await AsyncStorage.setItem('refreshToken',"")
            }
        }catch(e){

            console.log(e);
        }
    }
}

export const setInStorage = async (token="",refreshToken="") => {
    if(Platform.OS === "web"){
        localStorage.setItem("token",JSON.stringify(token))
        localStorage.setItem("refreshToken",JSON.stringify(refreshToken))
    }
    else if(Platform.OS === "ios" || Platform.OS === "android"){

        try{
           await AsyncStorage.setItem("token",JSON.stringify(token))
           await AsyncStorage.setItem("refreshToken",JSON.stringify(refreshToken))
        }catch(e){
            console.log(e);
        }
    }
}