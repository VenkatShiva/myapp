import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableHighlight,
} from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';


export default class Header extends Component {
  render() {
    return (
        <View style={styles.header}>
          <View style={[styles.profilepic,styles.center]}>
            <TouchableHighlight onPress={()=> this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                <Image
                source={require('../../assets/images/dp.jpg')}
                style={{width: 55, height: 55,borderColor: 'white', borderWidth: 1,borderRadius: 55,}}
                />
            </TouchableHighlight>
          </View>
          <View style={[styles.appname,styles.center]}>
            <Text style={styles.text}>My App</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    height: 65,
    backgroundColor: "black",
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
    flex: 5,
  },
  text:{
    fontFamily: "LobsterTwo-Bold",
    color: "white",
    fontSize: 30,
    marginLeft:-20
  }
});
