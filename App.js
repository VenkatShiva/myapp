/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Easing,
  Animated,
  StatusBar
} from 'react-native';
import { connect }  from 'react-redux';
import { createDrawerNavigator,
   createAppContainer,
   createStackNavigator,
} from "react-navigation";
import StackNavigator from './src/components/stackNavigator';
import Profile from './src/components/Profile';
import customDrawerContent from './src/components/customDrawerContent';
import LoginPage from './src/components/loginPage'

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
const MyStackNavigator  = createStackNavigator({
  loginPage: {
      screen: LoginPage,
  },
  myApp:{
      screen: MyDrawerNavigator,
  },
  },{
    headerMode: 'none',
  transitionConfig:() => {
      return {
        transitionSpec: {
          duration: 500,
          easing: Easing.out(Easing.poly(4)),
          timing: Animated.timing,
          useNativeDriver: true,
        },
        screenInterpolator: sceneProps => {      
          const { layout, position, scene } = sceneProps
    
          const thisSceneIndex = scene.index
          const width = layout.initWidth
          const opacity = position.interpolate({
              inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex+1],
              outputRange: [0, 1, 1],
            });
          const translateX = position.interpolate({
            inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex+1],
            outputRange: [width, 0, 0],
          })
    
          return { opacity, transform: [ { translateX } ] }
        },
      }
    }
})

const MyApp = createAppContainer(MyStackNavigator);
class App extends Component {
  render() {
    // console.log("myprops",this.props);
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#80b2f2" barStyle="light-content" />
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
