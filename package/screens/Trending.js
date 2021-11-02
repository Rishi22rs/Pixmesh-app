import React from 'react'
import {Text, View} from 'react-native'
import TrendingTopicTabs from '../components/molecules/TrendingTopicTabs'
import AppBar from '../components/molecules/AppBar'

const Trending =()=>{
  return(
    <View>
      <AppBar titlePt1="tren" titlePt2="ding" hideProfileIcon={true}/>
      <View>
        <TrendingTopicTabs />
      </View>
    </View>
  )
}

export default Trending