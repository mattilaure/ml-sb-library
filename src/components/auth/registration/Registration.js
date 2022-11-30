import React, { useState } from "react";

//components
import { View, Text, ImageBackground, Platform } from "react-native";

//style
import style from "./registrationStyle";

//components
import TextField from "../../textField/TextField";
import Button from "../../button/Button";

//api
import { signUpApi } from "../../../services/api/registration/registrationApi";

function Registration() {
  const [state, setState] = useState({
    email: "",
    password: "",
    username: "",
  });

  function handleChangeUser(e) {
    setState({ ...state, username: e });
  }
  function handleChangeMail(e) {
    setState({ ...state, email: e });
  }
  function handleChangePassword(e) {
    setState({ ...state, password: e });
  }

  function handleClick() {
    if (state.email !== "" && state.password !== "" && state.username !== "") {
      signUp();
    } else {
      console.log("error");
    }
  }

  async function signUp() {
    console.log("signup")
    await signUpApi(state);
    console.log("after await")
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
              <h1 style={{ color: "white" }}>Registrati</h1>
              <View style={style.signUpContainerWeb}>
                <View style={style.labelInput}>
                  <Text style={style.label}>Username</Text>
                  <TextField
                    placeholder={"Inserisci username"}
                    callback={handleChangeUser}
                  />
                </View>
                <View style={style.labelInput}>
                  <Text style={style.label}>Email</Text>
                  <TextField
                    placeholder={"Inserisci email"}
                    callback={handleChangeMail}
                  />
                </View>
                <View style={style.labelInput}>
                  <Text style={style.label}>Password</Text>
                  <TextField
                    placeholder={"Inserisci password"}
                    callback={handleChangePassword}
                  />
                </View>
                <Button label={"Registrati"} callback={handleClick} />
              </View>
            </>
          ) : (
            <>
              <Text style={{ color: "white" }}>Registrati</Text>
              <View style={style.signUpContainer}>
                <View style={style.labelInput}>
                  <Text style={style.label}>Username</Text>
                  <TextField
                    placeholder={"Inserisci username"}
                    callback={handleChangeUser}
                  />
                </View>
                <View style={style.labelInput}>
                  <Text style={style.label}>Email</Text>
                  <TextField
                    placeholder={"Inserisci email"}
                    callback={handleChangeMail}
                  />
                </View>
                <View style={style.labelInput}>
                  <Text style={style.label}>Password</Text>
                  <TextField
                    placeholder={"Inserisci password"}
                    callback={handleChangePassword}
                  />
                </View>
                <Button label={"Registrati"} callback={handleClick} />
              </View>
            </>
          )}
        </View>
      </ImageBackground>
    </View>
  );
}

export default Registration;
