import React from "react";

//components
import { View, Text, ImageBackground, Platform } from "react-native";

//style
import style from "./registrationStyle";

//components
import TextField from "../../textField/TextField";
import Button from "../../button/Button";

function Registration() {
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
                  <TextField placeholder={"Inserisci username"} />
                </View>
                <View style={style.labelInput}>
                  <Text style={style.label}>Email</Text>
                  <TextField placeholder={"Inserisci email"} />
                </View>
                <View style={style.labelInput}>
                  <Text style={style.label}>Password</Text>
                  <TextField placeholder={"Inserisci password"} />
                </View>
                <Button 
                  label={"Registrati"}
                />
              </View>
            </>
          ) : (
            <>
              <Text style={{ color: "white" }}>Registrati</Text>
              <View style={style.signUpContainer}>
                <View style={style.labelInput}>
                  <Text style={style.label}>Username</Text>
                  <TextField placeholder={"Inserisci username"} />
                </View>
                <View style={style.labelInput}>
                  <Text style={style.label}>Email</Text>
                  <TextField placeholder={"Inserisci email"} />
                </View>
                <View style={style.labelInput}>
                  <Text style={style.label}>Password</Text>
                  <TextField placeholder={"Inserisci password"} />
                </View>
              </View>
            </>
          )}
        </View>
      </ImageBackground>
    </View>
  );
}

export default Registration;
