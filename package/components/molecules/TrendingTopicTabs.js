import React from 'react'
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import TrendingTopicTab from '../atoms/TrendingTopicTab'

const TrendingTopicTabs=({data=[{active:true,tag:"trending"},{active:false,tag:"anime"},{active:false,tag:"cars"},{active:false,tag:"eren"},{active:true,tag:"trending"},{active:false,tag:"anime"},{active:false,tag:"cars"},{active:false,tag:"eren"},{active:true,tag:"trending"},{active:false,tag:"anime"},{active:false,tag:"cars"},{active:false,tag:"eren"},{active:true,tag:"trending"},{active:false,tag:"anime"},{active:false,tag:"cars"},{active:false,tag:"eren"},{active:true,tag:"trending"},{active:false,tag:"anime"},{active:false,tag:"cars"},{active:false,tag:"eren"},{active:true,tag:"trending"},{active:false,tag:"anime"},{active:false,tag:"cars"},{active:false,tag:"eren"}]})=>{
  
  return( 
    <View style={styles.tabs}>
      <FlatList 
        data={data}
        renderItem={({item})=><TrendingTopicTab active={item.active} topic={`#${item.tag}`}/>}
        keyExtractor={(_,key)=>key}
        horizontal={true}
      />
    </View>
  )
}

const styles=StyleSheet.create({
  tabs:{
    padding:10  
  }
})

export default TrendingTopicTabs