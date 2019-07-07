import React, {Component} from 'react';
import {
  createStackNavigator,
} from 'react-navigation';
import {
  Easing,
  Animated
} from 'react-native';
import TabNavigator from './tabNavigator';
import Header from './Header';
import UserHeader from './UserHeader';
import UserChat from './UserChat';

export default createStackNavigator({
    tabNavigator: {
        screen: TabNavigator,
        navigationOptions: ({navigation})=>({
            header: <Header navigation={navigation}/>,
        })
    },
    header:{
        screen: UserChat,
        navigationOptions: ({navigation})=>({
            header: <UserHeader navigation={navigation}/>,
        })
    }
},{
    transitionConfig:() => {
        return {
          transitionSpec: {
            duration: 800,
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
