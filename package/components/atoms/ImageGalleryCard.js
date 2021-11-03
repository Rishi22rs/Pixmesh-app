import { useTheme } from '@react-navigation/native'
import React from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native'

//icon
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const ImageGalleryCard=({item})=>{

  const{colors:{titleColor:{white,grey,orange}}}=useTheme()

  return(
    <TouchableOpacity activeOpacity={0.7}>
      <ImageBackground source={{uri:item.uri}} style={styles.img}>
        <AntDesignIcon style={styles.icon} name="heart" color={orange} size={15}/>
        <Text style={[styles.text,{backgroundColor:white,color:grey}]}>100%</Text>
      </ImageBackground>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
  img:{
    height:Dimensions.get("window").height/2.5,
    width:Dimensions.get("window").width/3,
  },
  text:{
    top:Dimensions.get("window").height/2.5-50,
    left:Dimensions.get("window").width/3/2-30,
    width:68,
    padding:10,
    paddingLeft:25,
    textAlign:"center",
    borderRadius:30,
    fontWeight:"bold"
  },
  icon:{
    position:"absolute",
    top:Dimensions.get("window").height/2.5-39,
    left:Dimensions.get("window").width/3/2-23,
    zIndex:69
  }
})

export default ImageGalleryCard