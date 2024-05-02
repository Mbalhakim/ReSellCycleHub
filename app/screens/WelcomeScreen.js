import React from 'react'
import { TouchableHighlight, useWindowDimensions, ImageBackground, StyleSheet,View,Text,Image, Button, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'; 

const WelcomeScreen = () => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    background:{
      flex:1,
      justifyContent:'flex-end',
    },
    loginButton:{
      borderRadius:30,
      width:'100%',
      height:60,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'lightgreen',
    },
    loginText:{
      color: 'darkblue',
      fontSize:30,
      fontWeight:'bold',
    },
  
    signuipButton:{
      borderRadius:30,
      width:'100%',
      height:60,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'darkblue',
      marginBottom:10,
    },
    signupText:{
      color: 'lightgreen',
      fontSize:30,
      fontWeight:'bold',
    },
  
    textBox:{
      alignItems:'center',
      marginBottom:windowWidth *0.1
    },
    WelcomeText:{
      alignSelf: 'flex-start', // Align text to the start of the container (top)
      color: 'lightgreen',
      fontSize: windowWidth * 0.1,
      fontWeight: 'bold',
       
    },
    WelcomeTextParagraph:{
      alignSelf: 'flex-start', // Align text to the start of the container (top)
      color: '#FFF5E0',
      fontSize: windowWidth * 0.04,
      fontWeight: 'bold',
    
    },
    LogoImage:{
      top:50,
      position:'absolute',
      width: windowWidth * 0.5, // Responsive width
      height: windowWidth * 0.5, // Responsive height
      alignSelf: 'center',
    },
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.6)', 
      justifyContent:'flex-end',
      
  
    }
  
    
  });
  const handleLoginPress = () => {
    navigation.navigate('Login'); // Navigate to LoginScreen
  };

  return (
    <ImageBackground style={styles.background} source={require("../assets/images/room-bg.jpg")}> 

    <View style={styles.overlay}>
    <Image style={styles.LogoImage}
       source={require('../assets/png/Color-logo-no-background.png')} />
      <View style={{ paddingRight:4, paddingLeft:4 }}>
       <View style={styles.textBox}>
       <Text style={styles.WelcomeText} >Welcome to {"\n"}ReSellCycleHub.</Text>
    <Text  style={styles.WelcomeTextParagraph}>The marketplace where you can give new life to pre-loved 
     items and find great deals on things you need. </Text>
       </View>
 
   

    <TouchableHighlight  onPress={handleLoginPress} >
    <View style={styles.loginButton}>

        <Text style={styles.loginText}>Login</Text>

        </View>
      </TouchableHighlight>


      <TouchableHighlight style={{paddingTop:10 }}  onPress={()=>{console.log('signup')}} >
    <View style={styles.signuipButton}>

        <Text style={styles.signupText}>Signup</Text>

        </View>
      </TouchableHighlight>
      </View>
      </View>
    </ImageBackground> 
  )
}

export default WelcomeScreen