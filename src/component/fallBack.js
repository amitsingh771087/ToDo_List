import { StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'

const FallBack = () => {
  return (
    <View style={{alignItems:"center"}}>
      <Image source={require("../../assets/To-Do-Img.png")}  style={{height:300 , width: 300}}/>
      <Text>Add Your Task Here</Text>
    </View>
  )
}

export default FallBack

const styles = StyleSheet.create({})