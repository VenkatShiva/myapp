import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';


export default class Header extends Component {
  componentDidMount(){
    console.log('userchat',this.props);
  }
  render() {
    return (
        <View style={styles.header}>
          <View style={[styles.profilepic,styles.center]}>
            <TouchableHighlight onPress={() => {
                console.log('foring',this.props)
                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'tabNavigator', params:{name:"Divya"}})],
                  });
                  this.props.navigation.dispatch(resetAction);
            }}
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
            <Text style={styles.text}>My User</Text>
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
