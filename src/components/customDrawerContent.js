import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native';
import { DrawerItems } from "react-navigation";

export default class customDrawerContent extends Component {
  render() {
    return (
      <View style={styles.profile}>
          <View style={[styles.drawerHead,styles.center]}>
            <Image
               source={require('../../assets/images/dp.jpg')}
               style={{width: 75, height: 75,borderRadius:75}}
            />
            <Text style={styles.text}>Venkat Shiva</Text>
          </View>
            <DrawerItems {...this.props}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    center:{
        justifyContent: "center",
        alignItems:"center",
    },
    drawerHead:{
        height: 120,
    },
    text:{
        fontFamily: "LobsterTwo-BoldItalic",
        color: "black",
        fontSize: 20,
    }
});
