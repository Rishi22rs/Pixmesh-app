import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react'
import { Dimensions, Image, ImageBackground,StyleSheet,Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

//icons
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

const VotingImgCard=({source,imgRadius={
  borderTopRightRadius:30,
  borderBottomLeftRadius:30
},profileImg,username})=>{

  const {colors}=useTheme()
  const [resize,setResize]=useState(false)
  const [showDetail,setShowDetail]=useState(true)

  const triggerResize=()=>{
    setResize(!resize)
  }
  
  const triggerDetail=()=>{
    setShowDetail(!showDetail)
  }

  return(
    <TouchableOpacity activeOpacity={1} onPress={triggerDetail}>
      <ImageBackground resizeMode={resize?"contain":"cover"} style={styles.imgBackground} imageStyle={imgRadius} source={{uri:source}}>
        <LinearGradient style={[styles.gradient,imgRadius]} colors={showDetail?['transparent','transparent','black']:['transparent','transparent']}>
          <EntypoIcon onPress={triggerResize} style={styles.resize} name="resize-full-screen" size={30} color={colors.titleColor.orange}/>
          <View style={[styles.detailContainer,{display:showDetail?"flex":"none"}]}>
            <View style={styles.profileContainer}>
              <View style={styles.profileImgNameContainer}>
                <Image style={styles.profileImg} source={{uri:profileImg}}/>
                <Text style={[styles.username,{color:colors.titleColor.white}]}>{username}</Text>
              </View>
              <View style={styles.profileImgNameContainer}>
                <AntDesignIcon name="heart" color={colors.titleColor.orange} size={30}/>
                <FontistoIcon style={{marginLeft:30}} name="comment" color={colors.titleColor.orange} size={30}/>
              </View>
            </View>
            <Text style={styles.caption} numberOfLines={2}>Eu irure aliqua amet non eu ad proident eu sunt veniam incididunt aliquip.Enim proident mollit ullamco mollit ex eu dolor esse.</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
  imgBackground:{
    height:(Dimensions.get("window").height/2)-60,
    width:Dimensions.get("window").width-20,
    marginBottom:10,
  },
  profileImg:{
    height:40,
    width:40,
    borderRadius:50
  },
  detailContainer:{
    top:(Dimensions.get("window").height/2)-205,
    padding:20,
  },
  gradient:{
    height:(Dimensions.get("window").height/2)-60
  },
  profileImgNameContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
  },
  username:{
    fontWeight:"900",
    marginLeft:10
  },
  caption:{
    marginTop:5
  },
  resize:{
    left:Dimensions.get("window").width-70,
    top:20
  },
  profileContainer:{
    display:'flex',
    flexDirection:"row",
    justifyContent:"space-between"
  }
})

export default VotingImgCard