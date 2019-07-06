import React, {Component} from 'react';
import {
  createStackNavigator
} from 'react-navigation';
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
})
