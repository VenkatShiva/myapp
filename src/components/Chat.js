import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableHighlight,
  Button
} from 'react-native';
export default class Chat extends Component {
  render() {
    return (
      <View style={styles.chat}>
          <ScrollView style={styles.messages}>
              <TouchableHighlight
                onPress={() => {
                  this.props.navigation.navigate('header');
                }}
              >
              <Text>
                First User
              </Text>
            </TouchableHighlight>
          </ScrollView>
          <TouchableHighlight style={styles.addIcon}>
            <Image
              source={require('../../assets/images/add.png')}
              style={{width: 60, height: 60}}
            />
          </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chat:{
      flex:1,
      overflow:'scroll',
      position:'relative',
  },
  addIcon:{
    position:'absolute',
    bottom:20,
    right:20
  }
});
