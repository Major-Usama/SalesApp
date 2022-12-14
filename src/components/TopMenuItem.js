import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {  RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from '@react-navigation/native';

export default function TopMenuItem(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
    onPress={props.onpress}
    activeOpacity={0.7}
    style={styles.container}>
     <props.Icon color="#fff" fill="black" size={24} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

container:
{
   width:RFValue(55),
   height:RFValue(55),
   borderRadius:15,
   justifyContent:"center",
   alignItems:'center',
   backgroundColor:'#111111',
}


})