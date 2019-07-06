import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import Header from './Header';

export default class Chat extends Component {
  render() {
    return (
      <View style={styles.profile}>
          {/* <Header navigation={this.props.navigation}/> */}
          <View style={[styles.center]}>
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
