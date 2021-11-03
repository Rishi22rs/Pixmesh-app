import React from 'react'
import {Text, View} from 'react-native'
import AppBar from '../components/molecules/AppBar'

const Leaderboard =()=>{
  return(
    <View>
      <AppBar titlePt1="leader" titlePt2="board" hideProfileIcon={true}/>
      
    </View>
  )
}

export default Leaderboard