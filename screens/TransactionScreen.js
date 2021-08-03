import React from 'react';
import { Text, View,TouchableOpacity, ImageBackground } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class TransactionScreen extends React.Component() {
  constructor(){
    super()
    this.state={
      hasCameraPermissions:null,
      scanned:false,
      scannedData:'',
      buttonState:'normal'
    }
  }
  getCameraPermissions=async()=>{
    const {status}=await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
      hasCameraPermissions:status==='granted'
    })
  }

  handleBarcodeScanned=async({type,data})=>{
    this.setState({
      scanned:true,
      scannedData:data,
      buttonState:'normal'
    })
  }

    render(){
      const hasCameraPermissions=this.state.hasCameraPermissions
      const scanned=this.state.scanned
      const buttonState=this.state.buttonState
      
      if (buttonState==='clicked'&& hasCameraPermissions) {
       return (
         <BarCodeScanner
         onBarCodeScanned={scanned ? undefined :this.handleBarcodeScanned}
         />
       ) 
      }
      else if (buttonState==='normal'){
        return(
          <View>
            <Text>
              hasCameraPermissions=== true ? this.state.scannedData:'Request Camera Permissions'
            </Text>
            <TouchableOpacity
            onPress={this.getCameraPermissions}>
              <Text>scanned or Code</Text>
              </TouchableOpacity>
          </View>
        )
      }
    }
