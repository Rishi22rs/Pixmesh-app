import React from 'react'
import {Text, View} from 'react-native'
import TrendingTopicTabs from '../components/molecules/TrendingTopicTabs'
import AppBar from '../components/molecules/AppBar'
import ImageGallery from '../components/molecules/ImageGallery'

const Trending =()=>{
  return(
    <View>
      <AppBar titlePt1="tren" titlePt2="ding" hideProfileIcon={true}/>
      <View>
        <View style={{height:55}}>
          <TrendingTopicTabs />
        </View>
        <ImageGallery/>
      </View>
    </View>
  )
}

export default Trending