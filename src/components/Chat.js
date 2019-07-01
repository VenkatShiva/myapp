import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image
} from 'react-native';
import Header from './Header';
export default class Chat extends Component {
    static navigationOptions = {
        drawerLabel: 'Chat',
    };
  render() {
    return (
      <View style={styles.chat}>
        <Header navigation={this.props.navigation}/>
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
  chat:{
      flex:1,
  },
  center:{
    justifyContent: "center",
    alignItems:"center",
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
