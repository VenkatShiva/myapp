import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
        <View style={styles.header}>
          <View style={[styles.profilepic,styles.center]}>
            <TouchableHighlight 
            onPress={()=> this.props.navigation.openDrawer()}
            underlayColor = {null}
            activeOpacity = {0.2}
            >
                <Image
                  source={require('../../assets/images/app_icon.png')}
                  style={{width: 55, height: 55}}
                />
            </TouchableHighlight>
          </View>
          <View style={[styles.appname,styles.center]}>
            <Text style={styles.text}>MyApp</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    height: 65,
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
    flex: 5,
  },
  text:{
    fontFamily: "LobsterTwo-Bold",
    color: "#3000F4",
    fontSize: 30,
    marginLeft:-20
  }
});
