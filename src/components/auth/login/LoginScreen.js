import React,{useState,useEffect} from "react";

//components
import { View, Text, ImageBackground, Platform } from "react-native";

//components
import TextField from "../../textField/TextField";
import Button from "../../button/Button";
//style
import style from "./loginStyle";
import { signinApi } from "../../services/api/login/loginApi";
import { useDispatch } from "react-redux";
import {setUser} from "../../ducks/user/userDuck";

//storage
import {getFromStorage,setInStorage, setRefreshTokenInStorage, setTokenInStorage} from "../../utils/storage";

function LoginScreen() {

  const dispatch = useDispatch();
  const [state,setState] = useState({
    email : "",
    password: ""
  }) 

  function handleChangeMail(e){
    setState({
      ...state,
      email: e
    })
  }

  function handleChangePassword(e){
    setState({
      ...state,
      password: e
    })
  }

  function handleClick(){
    if(state?.email !== "" && state?.password !== ""){
      signIn()
    }else{
      console.log("error");
    }
  }

  async function signIn(){
    console.log('dentro signin');
    const resp = await signinApi(state);
    if(resp.status === 200){
      console.log('signin fatto');
      setTokenInStorage(resp.data.token);
      setRefreshTokenInStorage(resp.data.refreshToken)
    }
  }

  return (
    <View style={style.container}>
      <ImageBackground
        source={require("../../assets/images/christmas-background.jpg")}
        resizeMode="cover"
        style={style.image}
      >
        <View style={style.title}>
          {Platform.OS === "web" ? (
            <>
              <h1 style={{ color: "white" }}>Login</h1>
              <View style={style.signUpContainerWeb}>
                <View style={style.labelInput}>
                  <Text style={style.label}>Email</Text>
                  <TextField placeholder={"Inserisci email"} callback={handleChangeMail}/>
                </View>
                <View style={style.labelInput}>
                  <Text style={style.label}>Password</Text>
                  <TextField placeholder={"Inserisci password"} callback={handleChangePassword}/>
                </View>
                <View style={style.buttonContainer}>
                  <Button label={"Accedi"} callback={handleClick} />
                </View>
              </View>
            </>
          ) : (
            <>
              <Text style={{ color: "white" }}>Login</Text>
              <View style={style.signUpContainerMobile}>
                <View style={style.labelInput}>
                  <Text style={style.label}>Email</Text>
                  <TextField placeholder={"Inserisci email"} callback={handleChangeMail}/>
                </View>
                <View style={style.labelInput}>
                  <Text style={style.label}>Password</Text>
                  <TextField placeholder={"Inserisci password"} callback={handleChangePassword}/>
                </View>
                <View style={style.buttonContainer}>
                  <Button label={"Accedi"} callback={handleClick} />
                </View>
              </View>
            </>
          )}
        </View>
      </ImageBackground>
    </View>
  );
}

export default LoginScreen;
