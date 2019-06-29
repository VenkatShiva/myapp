/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={[styles.profilepic,styles.center]}>
            <Image
              source={require('./assets/images/dp.jpg')}
              style={{width: 55, height: 55,borderColor: 'white', borderWidth: 1,borderRadius: 55,}}
            />
          </View>
          <View style={[styles.appname,styles.center]}>
            <Text style={styles.text}>My App</Text>
          </View>
        </View>
        <View style={styles.body}>
          <ScrollView style={styles.messages}>
            
          </ScrollView>
          <View style={[styles.footer,styles.center]}>
              <TextInput style={[styles.input]}
                placeholder = 'Type here..'
              ></TextInput>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    borderWidth: 1,
    borderColor: 'black',
    overflow: "hidden",
    backgroundColor:"white",
  },
  header:{
    height: 65,
    backgroundColor: "black",
    flexDirection: "row",
  },
  center:{
    justifyContent: "center",
    alignItems:"center",
  },
  profilepic:{
    flex: 1,
    overflow:'hidden',
  },
  appname:{
    flex: 5,
  },
  body:{
    overflow:'scroll',
    flex:1
  },
  footer:{
    marginTop:'auto',
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection:'row',
    backgroundColor:'black'
  },
  input:{
    height: 45,
    borderColor: 'black',
    borderRadius: 50,
    borderWidth: 1,
    flex:1,
    backgroundColor:'white',
    paddingLeft: 30
  },
  text:{
    fontFamily: "LobsterTwo-Bold",
    color: "white",
    fontSize: 30,
  }
});
