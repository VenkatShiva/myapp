import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableHighlight,
  Dimensions,
  Picker
} from 'react-native';
import {
    NavigationActions,
    StackActions } from "react-navigation";
import { connect } from "react-redux";
import LinearGradient from 'react-native-linear-gradient';

import { setMobileNumber } from '../reducers/actions';

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
           mobileInput:"",
           isMobileEntered: false,
           errorMessage:""
        }
        this.mobileInputChange = this.mobileInputChange.bind(this);
        this.submitMobileNumber = this.submitMobileNumber.bind(this);
        this.mobileInputs = [];
    }
  mobileInputChange(number){
      let numberWithoutSpace = number.replace(/[^0-9]/g,"");
      this.setState({
        mobileInput : numberWithoutSpace.slice(0,10)
      });
  }
  onOtpEnter(key){
      console.log(key);
  }
  async submitMobileNumber(){
    //  console.log(this.state.mobileInput, this.state.mobileInput.length)
    if(this.state.mobileInput.length != 10){
        this.setState({
            errorMessage : "Please enter valid mobile number"
        })
    }
    else{
        await this.props.setMobileNumber(this.state.mobileInput);
        this.setState({
            isMobileEntered: true,
            errorMessage : ""
        });
        // console.log(this.props.mobileNumber, this.state.mobileInput);
    }
  }
  gotoApp(){
      //login validation
      this.props.navigation.navigate('myApp');
      const resetAction = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'myApp'})
        ]
      });
      this.props.navigation.dispatch(resetAction);
  }
  render() {
    //  console.log("wi",this.props,this.state)
    let inputs = Array(6).fill(0);
    return (
        <LinearGradient style={styles.login}
         colors={['#cce2ff', '#ebf3ff', '#cce2ff']}
         start={{x: 0, y: 0}}
         end={{x: 0, y: 1}}
         >
            
            <ScrollView contentContainerStyle={styles.login}>
                <Text style={styles.welcome}>Welcome to MyApp</Text>
                <View style={styles.inputField}>
                    <Text style={{color:"black", paddingBottom:10, fontSize: 20}}>Enter your mobile number</Text>
                    <View style={styles.numberField}>
                        <Picker
                            selectedValue="+91"
                            style={styles.numberCode}  
                        >
                            <Picker.Item label="+91" value="+91" />
                        </Picker>
                        <TextInput
                            placeholder = 'mobile number'
                            keyboardType = "number-pad"
                            editable = {this.state.isMobileEntered ? false:true}
                            style={styles.numberInput}
                            value={this.state.mobileInput}
                            onChangeText={this.mobileInputChange}
                            blurOnSubmit = {true}
                            onSubmitEditing = {()=>{
                                    this.submitMobileNumber();
                                }
                            }
                        >
                        </TextInput>
                    </View>
                    
                    <Text style={{color:"black", paddingVertical:10, fontSize: 20,display:this.state.isMobileEntered ? "flex":"none"}}>Enter OTP here</Text>
                    <View style={[{display:this.state.isMobileEntered ? "flex":"none"},styles.otpContainer]}>
                            {
                                inputs.map((value,index)=>{
                                    return (
                                        <TextInput
                                        keyboardType = "number-pad"
                                        style={styles.otpInput}
                                        ref={(ref)=>{
                                            this.mobileInputs.push(ref);
                                        }}
                                        onKeyPress={this.onOtpEnter}
                                        key={index+"otp"}
                                        >
                                        </TextInput>
                                    )
                                })
                            }
                    </View>
                    
                    <Text style={{color:"red",display: this.state.errorMessage ? "flex":"none"}}>{this.state.errorMessage}</Text>
                    <TouchableHighlight
                        onPress={() => {
                            if(this.state.isMobileEntered){
                                this.gotoApp();
                            } else {
                                this.submitMobileNumber();
                            } 
                        }}
                        underlayColor = "#a1c9ff"
                        activeOpacity = {0.5}
                        style={styles.submitNumber}
                    >
                    <Text style={{color:"black",fontSize: 16}}>
                        SUBMIT
                    </Text>
                </TouchableHighlight>
                </View>
            </ScrollView>
        </LinearGradient>
    );
  }
}
const mapStateToProps =  state => {
    return {
      mobileNumber: state.myNumber,
    };
};
export default  connect(mapStateToProps,{setMobileNumber})(LoginPage);
const dimensions = Dimensions.get('window');
const width = Math.round(dimensions.width*8/10);
const styles = StyleSheet.create({
  login:{
      flex:1,
    //   justifyContent:"center",
    //   alignItems:"center"
  },
  welcome:{
      fontSize:30,
      color:"black",
      fontFamily: "LobsterTwo-Bold",
  },
  inputField:{
      marginTop:10,
    //   alignItems:"center",
     // width,
    //   borderWidth:2,
    //   borderColor:"black",
    //   borderRadius:10,
      padding:10,
  },
  numberField:{
      flexDirection:"row",
      borderBottomColor:"black",
      borderWidth:1,
      borderRadius:10,
      
  },
  numberCode:{
      flex:5,
  },
  numberInput:{
      flex:10,
      fontSize: 18
  },
  submitNumber:{
      padding:10,
      backgroundColor:"#a1c9ff",
      marginTop:10,
      borderRadius:10,
      marginLeft: "auto",
  },
  otpContainer:{
      flexDirection:"row"
  },
  otpInput:{
      height: 50,
      borderWidth:1,
      borderRadius:5,
      borderColor:"black",
      margin:5,
      padding:15,
      flex:1
  },
  otpHeading:{

  }
});
