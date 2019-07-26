import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableHighlight,
  BackHandler,
} from 'react-native';
export default class Chat extends Component {
  // componentDidMount() {
  //   BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
  // }
  // componentWillUnmount() {
  //   BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
  // }
  // onBackButtonPressAndroid = () => {
  //   this.props.navigation.navigate('tabNavigator');
  //   return true;
  // };
  render() {
    return (
      <View style={styles.chat}>
        <View style={styles.body}>
          <ScrollView style={styles.messages}>
              <Text>User Chat</Text>
          </ScrollView>
          <View style={[styles.footer,styles.center]}>
              <TextInput style={[styles.input]}
                placeholder = 'type message here..'
                multiline = {true}
                placeholderTextColor= "#aac3e3"
                autoCorrect = {false}
                selectionColor= '#aac3e3'
              ></TextInput>
              <TouchableHighlight
                onPress = {()=>null} 
                activeOpacity = {0.2}  
                underlayColor = {null}       
              >
                <Image
                source={require('../../assets/images/send.png')}
                style={{width: 51, height: 51, marginLeft: 5}}
                />
              </TouchableHighlight>
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
    alignItems:"flex-end",
  },
  body:{
    overflow:'scroll',
    flex:1
  },
  footer:{
    marginTop:'auto',
    height: 'auto',
    flexDirection:'row',
    marginBottom: 5,
    paddingLeft:5,
    paddingRight:5
  },
  input:{
    height: 'auto',
    borderColor: '#80b2f2',
    borderRadius: 25,
    borderWidth: 1,
    flex:1,
    backgroundColor:'white',
    paddingLeft: 20,
    fontSize: 20,
    color: "#2c82f2",
    maxHeight: 89,
  }
});
