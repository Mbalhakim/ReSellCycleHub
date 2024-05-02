import React, { useState } from 'react'
import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View, useWindowDimensions } from 'react-native'
const logo = require("../assets/png/Color-logo-no-background.png")



export default function LoginForm() {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const styles = StyleSheet.create({
    container : {
    justifyContent:'center',
      alignItems : "center",
      flex:1,
      backgroundColor:'darkblue',
    },
    image : {
        marginTop:windowWidth * 0.2,
      width: windowWidth * 0.6, // Responsive width
      height: windowWidth * 0.6, // Responsive height
    },
    title : {
      fontSize : windowWidth * 0.1,
      fontWeight : "bold",
      textTransform : "uppercase",
      textAlign: "center",
      paddingVertical :  windowWidth * 0.1,
      color : "lightgreen"
    },
    inputView : {
      gap : 15,
      width : "100%",
      paddingHorizontal : 40,
      marginBottom  :5
    },
    input : {
      height : 50,
      paddingHorizontal : 20,
      borderColor : "lightgreen",
      borderWidth : 1,
      borderRadius: 7,
      color:'lightgreen',
    },
    rememberView : {
      width : "100%",
      paddingHorizontal : 50,
      justifyContent: "space-between",
      alignItems : "center",
      flexDirection : "row",
      marginBottom : 8
    },
    switch :{
      flexDirection : "row",
      gap : 1,
      justifyContent : "center",
      alignItems : "center"
      
    },
    rememberText : {
      fontSize:  windowWidth * 0.035,
      color : "#FFF5E0",
    },
    forgetText : {
      fontSize :  windowWidth * 0.035,
      color : "red"
    },
    button : {
      backgroundColor : "lightgreen",
      borderRadius:30,
      width:'100%',
      height:60,
      alignItems : "center",
      justifyContent : "center"
    },
    buttonText : {
      color : "darkblue"  ,
      fontSize:  windowWidth * 0.05,
      fontWeight : "bold"
    }, 
    buttonView :{
      width :"100%",
      paddingHorizontal : 50
    },
   
    footerText : {
      textAlign: "center",
      color : "#FFF5E0",
      marginTop: windowWidth * 0.05,
      fontSize: windowWidth * 0.04
    },
    signup : {
      color : "red",
      fontSize :  windowWidth * 0.04
    }
  })

    const [click,setClick] = useState(false);
    const {username,setUsername}=  useState("");
    const {password,setPassword}=  useState("");
  return (
    <SafeAreaView style={styles.container}>
        
        <Image source={logo} style={styles.image} />
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputView}>
            <TextInput style={styles.input} placeholder='EMAIL OR USERNAME'  placeholderTextColor="#FFF5E0"  value={username} onChangeText={setUsername} autoCorrect={false}
        autoCapitalize='none' />
            <TextInput style={styles.input} placeholder='PASSWORD' placeholderTextColor="#FFF5E0" secureTextEntry value={password} onChangeText={setPassword} autoCorrect={false}
        autoCapitalize='none'/>
        </View>
        <View style={styles.rememberView}>
            <View style={styles.switch}>
                <Switch  value={click} onValueChange={setClick} trackColor={{true : "green" , false : "gray"}} />
                <Text style={styles.rememberText}>Remember Me</Text>
            </View>
            <View>
                <Pressable onPress={() => Alert.alert("Forget Password!")}>
                    <Text style={styles.forgetText}>Forgot Password?</Text>
                </Pressable>
            </View>
        </View>

        <View style={styles.buttonView}>
            <Pressable style={styles.button} onPress={() => Alert.alert("Login Successfuly!")}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </Pressable>
        </View>
    
        <Text style={styles.footerText}>Don't Have Account?<Text style={styles.signup}>  Sign Up</Text></Text>

        
    </SafeAreaView>
  )
}

