import React from 'react'
import {Text, View} from 'react-native'
import AppBar from '../components/molecules/AppBar'
import LeaderboardList from '../components/molecules/LeaderboardList'

const Leaderboard =()=>{
  return(
    <View>
      <AppBar titlePt1="leader" titlePt2="board" hideProfileIcon={true}/>
      <LeaderboardList/>
    </View>
  )
}

export default Leaderboard