import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableHighlight,
} from 'react-native';
export default class Chat extends Component {
  render() {
    return (
      <View style={styles.chat}>
          <ScrollView style={styles.messages}>
              <TouchableHighlight
                onPress={() => {
                  this.props.navigation.navigate('header',{userName:"Shiva"});
                }}
                underlayColor = {null}
                activeOpacity = {0.2}
              >
              <Text>
                First User of Me
              </Text>
            </TouchableHighlight>
          </ScrollView>
          <TouchableHighlight style={styles.addIcon}
            onPress={() => {
              this.props.navigation.navigate('addFriend');
            }}
            underlayColor = {null}
            activeOpacity = {0.2}
          >
            <Image
              source={require('../../assets/images/add.png')}
              style={{width: 60, height: 60, borderRadius:30, borderColor:'#3000F4', borderWidth:1}}
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
