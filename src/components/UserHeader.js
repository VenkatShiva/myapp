import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';


export default class Header extends Component {
  componentDidMount(){
    console.log('userchat',this.props);
  }
  render() {
    return (
        <View style={styles.header}>
          <TouchableHighlight style={[styles.profilepic,styles.center]}
            onPress = {() => {
              console.log('foring',this.props)
                this.props.navigation.navigate('tabNavigator');
            }}
            underlayColor = {null}
            activeOpacity = {0.2}
          >
            <View style={[styles.profilepic,styles.center,{flexDirection:'row'}]}>
              <Image
                source={require('../../assets/images/left.png')}
                style={{width: 25, height: 20}}
              /> 
              <Image
                source={require('../../assets/images/user.png')}
                style={{width: 40, height: 40,borderRadius:20}}
              />
              </View>
          </TouchableHighlight>
          <View style={[styles.appname,styles.center]}>
            <Text style={styles.text}>My User</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    height: 50,
    backgroundColor: "#80b2f2",
    flexDirection: "row",
  },
  center:{
    alignItems:"center",
    justifyContent: "center"
  },
  profilepic:{
    flex: 1,
    overflow:'hidden',
  },
  appname:{
    flex: 4,
  },
  text:{
    fontFamily: "LobsterTwo-Bold",
    color: "#3000F4",
    fontSize: 30,
    marginLeft:-20
  }
});
