import React from 'react'
import {ImageBackground, ScrollView, Text, View,StyleSheet, Dimensions} from 'react-native'
import AppBar from '../components/molecules/AppBar'
import VotingImgCard from '../components/molecules/VotingImgCards'

const Home =()=>{
  return(
    <View>
      <AppBar/>
        <View style={styles.imgContainer}>
          <VotingImgCard 
            source="https://qph.fs.quoracdn.net/main-qimg-71989a620680f673573dd918614fe2ba"
            profileImg="https://i.pinimg.com/474x/5a/21/1e/5a211ed585466597727c493653deb6dc.jpg"
            username="jennie02"
          />
          <VotingImgCard 
            imgRadius={{
              borderTopLeftRadius:30,
              borderBottomRightRadius:30
            }} 
            source="https://i.pinimg.com/originals/9f/66/f1/9f66f1923bf4befbbf974ed05afb2588.jpg"
            profileImg="https://i.pinimg.com/222x/55/73/cb/5573cb0f7c935e2ddb8e9c85331238dc.jpg"
            username="lisa57"
          />
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
  imgContainer:{
    display:"flex",
    justifyContent:'center',
    alignItems:"center",
    marginTop:10

  }
})

export default Home