import { useTheme } from '@react-navigation/native'
import React, { useContext } from 'react'
import { View,Text,StyleSheet, Image } from 'react-native'

const AppBar=({titlePt1="pix",titlePt2="mesh"})=>{

  const {colors}=useTheme()

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}><Text style={[{color:colors.titleColor.orange},styles.title]}>{titlePt1}</Text><Text style={[{color:colors.titleColor.grey},styles.title]}>{titlePt2}}</Text></View>
      <View style={[styles.profileContainer,{backgroundColor:colors.titleColor.orange}]}>
        <Image source={{uri:"https://blackpinkupdate.com/wp-content/uploads/2018/06/blackpink-rose-instagram-photo-roses-are-rosie-cute.jpg"}} style={styles.profileImg}/>
        <Text style={[{color:colors.titleColor.white},styles.profileText]}>Rosie</Text>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingLeft:30,
    paddingRight:20,
    paddingTop:10
  },  
  titleContainer:{
    display:'flex',
    flexDirection:'row',
  },
  title:{
    fontSize:22,
    fontWeight:"500"
  },
  profileImg:{
    width:30,
    height:30,
    borderTopLeftRadius:15,
    borderBottomRightRadius:15,
  },
  profileContainer:{
    display:"flex",
    flexDirection:'row',
    padding:5,
    borderTopLeftRadius:20,
    borderBottomRightRadius:20,
    justifyContent:"space-around",
    alignItems:"center"
  },
  profileText:{
    marginLeft:10,
    marginRight:10,
    fontWeight:"600"
  }
})

export default AppBar