import React, {Component} from 'react';
import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableHighlight,
} from 'react-native';
export default class Chat extends Component {
  componentDidMount(){
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        'title': 'Contacts',
        'message': 'This app would like to view your contacts.'
      }
    ).then(() => {
      Contacts.getAll((err, contacts) => {
        if (err === 'denied'){
          alert("Access Denied")
        } else {
          //alert("Accepted");
          console.log(contacts);
        }
      })
    })
  }
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
