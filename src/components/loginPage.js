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
let mobileInputs = [];
//let otpEntered = Array(6).fill(null);
class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
           mobileInput:"",
           isMobileEntered: false,
           errorMessage:"",
           otpEntered: Array(6).fill("")
        }
        this.mobileInputChange = this.mobileInputChange.bind(this);
        this.submitMobileNumber = this.submitMobileNumber.bind(this);
    }
  mobileInputChange(number){
      let numberWithoutSpace = number.replace(/[^0-9]/g,"");
      this.setState({
        mobileInput : numberWithoutSpace
      })
  }
//   onOtpEnter(key){
//       console.log(key,mobileInputs);
//   }
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
        mobileInputs[0].focus();
        // console.log(this.props.mobileNumber, this.state.mobileInput);
    }
  }
  gotoApp(){
      //login validation
      let otp = this.state.otpEntered.slice();
      otp = otp.join("");
      if(otp.length != 6) {
        this.setState({
            errorMessage : "Please enter 6 digits OTP"
        })
      }
      else if(otp != "123456"){
        this.setState((previousState,props)=>{
            const otps = Array(6).fill(""); 
            return Object.assign({},previousState ,{otpEntered : otps,errorMessage : "Wrong pin, try again"});
        })
      }
      else {
        this.props.navigation.navigate('myApp');
        const resetAction = StackActions.reset({
            index: 0,
            actions: [
            NavigationActions.navigate({ routeName: 'myApp'})
            ]
        });
        this.props.navigation.dispatch(resetAction);
     }
  }
  render() {
    //  console.log("wi",this.props,this.state)
    let inputs = Array(6).fill(0);
    //console.log(this.state.otpEntered);
    return (
        <LinearGradient style={styles.login}
         colors={['#cce2ff', '#ebf3ff', '#cce2ff']}
         start={{x: 0, y: 0}}
         end={{x: 0, y: 1}}
         >
            
            <ScrollView contentContainerStyle={styles.login}
                keyboardShouldPersistTaps = "always"
                >
                <Text style={styles.welcome}>Welcome to MyApp</Text>
                <View style={styles.inputField}>
                    <Text style={{color:"black", paddingBottom:10, fontSize: 20}}>Enter your mobile number</Text>
                    <View style={styles.numberField}>
                        <Picker
                            selectedValue="+91"
                            style={styles.numberCode}  
                            enabled={this.state.isMobileEntered ? false:true}
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
                            maxLength={10}
                            selectionColor = "#aac3e3"
                            textContentType="telephoneNumber"
                            onSubmitEditing = {()=>{
                                    this.submitMobileNumber();
                                }
                            }
                        >
                        </TextInput>
                    </View>
                    
                    <Text style={{color:"black", paddingVertical:10, fontSize: 20,display:this.state.isMobileEntered ? "flex":"none"}}>Enter your pin</Text>
                    <View style={[{display:this.state.isMobileEntered ? "flex":"none"},styles.otpContainer]}>
                            {
                                inputs.map((value,index)=>{
                                    return (
                                        <View style={styles.otpInput} key={index+"otp"}>
                                            <TextInput
                                            keyboardType = "decimal-pad"
                                            ref={(ref)=>{
                                                mobileInputs[index]=ref;
                                            }}
                                            style={styles.otpField}
                                            onChangeText={
                                                (value)=>{
                                                    let enteredValue = value.replace(/[^0-9]/g,"");
                                                    this.setState((previousState,props)=>{
                                                        let otps = previousState.otpEntered.slice();
                                                        otps[index] = enteredValue;
                                                        return Object.assign({},previousState ,{otpEntered : otps});
                                                    },()=>{
                                                        if(enteredValue !== ""){
                                                            if(index == 5){
                                                                mobileInputs[index].blur();
                                                                this.gotoApp();
                                                            }
                                                            else 
                                                                mobileInputs[index+1].focus();
                                                        }
                                                        else{
                                                            mobileInputs[index-1].focus()
                                                        }
                                                    });
                                                }
                                            }
                                            onKeyPress={(nativeEvent)=>{
                                                if(nativeEvent.nativeEvent.key == "Backspace"){
                                                    if(index > 0 && this.state.otpEntered[index] == "")
                                                        mobileInputs[index-1].focus();
                                                }
                                            }}
                                            selectionColor = "#aac3e3"
                                            value={this.state.otpEntered[index]?"*":""}
                                            maxLength={1}
                                            selectTextOnFocus={true}
                                            >
                                            </TextInput>
                                        </View>
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
      justifyContent:"center",
      alignItems:"center"
  },
  welcome:{
      fontSize:30,
      color:"black",
      fontFamily: "LobsterTwo-Bold",
  },
  inputField:{
      marginTop:10,
      //  alignItems:"center",
      width,
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
      backgroundColor:"#f2f7ff"
  },
  numberCode:{
      flex:5,
  },
  numberInput:{
      flex:10,
      fontSize: 18,
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
      margin:3,
      backgroundColor:"#f2f7ff",
      // marginHorizontal:15,
      flex:1
  },
  otpField:{
      marginLeft:12,
      fontSize:18,
  }
});
