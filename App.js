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
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image
} from 'react-native';
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import Chat from './src/components/Chat';
import Profile from './src/components/Profile';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const MyDrawerNavigator = createDrawerNavigator({
  Chat: {
    screen: Chat,
  },
  Profile: {
    screen: Profile,
  },
});

const MyApp = createAppContainer(MyDrawerNavigator);
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MyApp />
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
});
