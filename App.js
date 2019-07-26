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
  View,
  Image
} from 'react-native';
import { connect }  from 'react-redux';
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import StackNavigator from './src/components/stackNavigator';
import Profile from './src/components/Profile';
import customDrawerContent from './src/components/customDrawerContent';

// const deviceWidth = Dimensions.get('window').width;
// const deviceHeight = Dimensions.get('window').height;
const MyDrawerNavigator = createDrawerNavigator({
  Chat: {
    screen: StackNavigator,
    navigationOptions:{
      drawerIcon: (<Image
        source = {require('./assets/images/chat.png')}
        style={{width: 40, height: 40}}
      />),
      drawerLabel:'Chat'
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions:{
      drawerIcon: (<Image
        source={require('./assets/images/user.png')}
        style={{width: 40, height: 40}}
      />),
      drawerLabel:'Profile',
    }
  },
},{
  contentComponent: customDrawerContent,
  contentOptions:{
    activeTintColor : "#3000F4",
    inactiveTintColor: "black",
    activeBackgroundColor: "white",
    labelStyle: {
      textAlign: "center",
      fontSize: 17,
      flex:1,
      marginLeft:-20,
      opacity:1,
    },
    iconContainerStyle: {
      opacity: 1
    },
    inactiveLabelStyle:{
      opacity:1,
    }
  },
  drawerBackgroundColor: "#aac3e3"
});

const MyApp = createAppContainer(MyDrawerNavigator);
class App extends Component {
  render() {
    console.log("myprops",this.props);
    return (
      <View style={styles.container}>
        <MyApp />
      </View>
    );
  }
}
function mapStateToProps(state){
  return {
    state :state,
  }
}
export default connect(mapStateToProps,null)(App);
const styles = StyleSheet.create({
  container:{
    flex:1,
    borderWidth: 1,
    borderColor: '#aac3e3',
    overflow: "hidden",
    backgroundColor:"white",
  },
});
