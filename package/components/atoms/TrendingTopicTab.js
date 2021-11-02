import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from '@react-navigation/native'

const TrendingTopicTab=({topic="trending",active=false})=>{

  const {colors:{titleColor:{white,grey,orange}}}=useTheme()

  return( 
    <TouchableOpacity><Text style={[styles.tab,{color:white,backgroundColor:active?orange:grey}]}>{topic}</Text></TouchableOpacity>
  )
}

const styles=StyleSheet.create({
  tab:{
    padding:10,
    margin:2,
    borderRadius:30
  }
})

export default TrendingTopicTab