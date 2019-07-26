import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  PermissionsAndroid,
} from 'react-native';
import Contacts from 'react-native-contacts';


export default class addFeader extends Component {
  constructor(props){
    super(props);
    this.state={contactList:[]}
  }
  hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
       hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  } 

 intToRGB(i){
    i= this.hashCode(i);
    let c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

    return "#"+"00000".substring(0, 6 - c.length) + c;
  }
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
          let contactList = contacts.map((contact)=>({
              displayName :contact.displayName,
              dpBackground : this.intToRGB(contact.displayName),
              dpName : contact.displayName.match(/\b(\w)/g).slice(0,2).join('').toUpperCase(),
              phoneNumbers : contact.phoneNumbers.map((number)=>{
                return number.number.replace(/[^\d]/g,"").slice(-10);
              })
            }
          ));
          contactList.sort((a,b)=>a.displayName>b.displayName?1:b.displayName>a.displayName?-1:0)
          this.setState(prevState=>{
            return Object.assign(prevState ,{contactList:contactList});
          });
        }
      })
    })
  }
  render() {
    return (
        <FlatList
          data={this.state.contactList}
          keyExtractor={(item, index) => index.toString()}
          renderItem = {({item,index})=>
          <View>
            <TouchableHighlight
                onPress={() => {
                  this.props.navigation.navigate('header',{userName:item.displayName});
                }}
                underlayColor = "#e8f2ff"
                activeOpacity = {0.2}
              >
              <View style={styles.contact}>
                <View style={[styles.dp,{backgroundColor: item.dpBackground}]}>
                  <Text style={styles.dpLetter}>
                    {item.dpName}
                  </Text>
                </View>
                <View style={styles.dname}>
                  <Text style={styles.name}>
                    {item.displayName}
                  </Text>
                  <Text style={styles.status}>
                    My Life is beatiful with you.
                  </Text>
                </View>
              </View>
            </TouchableHighlight>
            <View style={styles.borderBottom}></View>
        </View>
         }
        >
        </FlatList>
    );
  }
}

const styles = StyleSheet.create({
  contact:{
    height: 70,
    flexDirection: "row",
    justifyContent:"center",
    alignItems:"center"
  },
  dp:{
    height: 50,
    width: 50,
    borderRadius: 25,
    marginLeft: 10,
    marginRight: 10,
    borderColor: "#80b2f2",
    borderWidth: 2,
    alignItems: "center",
    justifyContent:"center",
  },
  dpLetter:{
    color: "white",
    fontWeight:"bold",
    fontSize: 25,
    paddingBottom: 2,
    textAlign:"center"
  },
  dname:{
    flex:1,
  },
  name:{
    paddingVertical:3,
    fontSize: 20,
    fontWeight: "800",
    color: "black"
  },
  // status:{
  //   paddingVertical:2
  // },
  borderBottom:{
    marginLeft: 70,
    marginRight: 10,
    height:1,
    backgroundColor:"#80b2f2"
  }
});
