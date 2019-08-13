import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";

class chatBubble extends Component {
  render() {
    return (
          <View style={[styles.textContainer,this.props.message.type == "friend" ? styles.botBubble:null]}>
            <Text style={styles.text}>{this.props.message.text}</Text>
          </View>
    );
  }
}
const dimensions = Dimensions.get('window');
const maxWidth = Math.round(dimensions.width*8/10);
const styles = StyleSheet.create({
  botBubble:{
    marginLeft: 10,
    marginRight: "auto",
    marginRight: 0,
    borderBottomRightRadius:20,
    borderTopLeftRadius:0,
    backgroundColor:"#defff1"
  },
  textContainer:{
    marginLeft:"auto",
    marginRight: 10,
    padding:10,
    borderRadius:20,
    borderBottomRightRadius:0,
    backgroundColor:"#e6f1ff",
    marginTop:5,
    marginBottom:5,
    maxWidth
  },
  text:{
    color:"black"
  }
});

export default chatBubble;
