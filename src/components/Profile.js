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
        drawerLabel: 'Profile',
    };
  render() {
    return (
      <View style={styles.profile}>
          <Header navigation={this.props.navigation}/>
          <View style={[styles.appname,styles.center]}>
            <Text style={styles.text}>My Profile</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text:{
    fontFamily: "LobsterTwo-Bold",
    color: "black",
    fontSize: 30,
  }
});
