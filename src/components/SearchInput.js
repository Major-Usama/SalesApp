import { StyleSheet, Text, View,TextInput, Dimensions } from 'react-native'
import React from 'react'
import { RFValue } from "react-native-responsive-fontsize";

const WIDTH = Dimensions.get('window').width
export default function SearchInput(props) {
  return (
    <View>
       <TextInput
        style={styles.input}
        onChangeText={props.setValue}
        value={props.value}
        placeholder="Zoeken..."
        placeholderTextColor={'#9C9C9C'}
      />
    </View>
  )
}

const styles = StyleSheet.create({

   input:
   {
    width:WIDTH-RFValue(20),
    height:RFValue(55),
    color:'#9C9C9C',
    fontFamily:'Regular',
    paddingHorizontal:RFValue(18),
    borderRadius:15,
    backgroundColor:'#111111',
    alignSelf:'center'


   }
})