import React from 'react'
import { Dimensions, FlatList, Image, ImageBackground, StyleSheet, View } from 'react-native'

const LeaderboardList=({data=[{uri:"https://i.pinimg.com/originals/45/3e/ca/453ecab8ded493d5fc69887f5d670b0d.jpg",likablity:69},{uri:"https://images.unsplash.com/photo-1612468008274-9445bd56161e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29vbCUyMGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",likablity:69},{uri:"https://lh3.googleusercontent.com/proxy/I-U-WETeol5OfhV41K5K924QjzEMYf2usZA7WhhmrpOLqipRpEubSqFiflzW0H8MfMIc3aHgjqSR0hhTfBThxrvXCUWFnmwT1ce5N-rLke_VpPfDWhvYyd_5wPv9s3KWUyDC8KSMuw",likablity:54},{uri:"https://theawesomedaily.com/wp-content/uploads/2017/08/pictures-of-cool-cars-24-1.jpg",likablity:45},{uri:"https://i.pinimg.com/originals/45/3e/ca/453ecab8ded493d5fc69887f5d670b0d.jpg",likablity:69},{uri:"https://images.unsplash.com/photo-1612468008274-9445bd56161e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29vbCUyMGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",likablity:69},{uri:"https://lh3.googleusercontent.com/proxy/I-U-WETeol5OfhV41K5K924QjzEMYf2usZA7WhhmrpOLqipRpEubSqFiflzW0H8MfMIc3aHgjqSR0hhTfBThxrvXCUWFnmwT1ce5N-rLke_VpPfDWhvYyd_5wPv9s3KWUyDC8KSMuw",likablity:54},{uri:"https://theawesomedaily.com/wp-content/uploads/2017/08/pictures-of-cool-cars-24-1.jpg",likablity:45},{uri:"https://i.pinimg.com/originals/45/3e/ca/453ecab8ded493d5fc69887f5d670b0d.jpg",likablity:69},{uri:"https://images.unsplash.com/photo-1612468008274-9445bd56161e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29vbCUyMGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",likablity:69},{uri:"https://lh3.googleusercontent.com/proxy/I-U-WETeol5OfhV41K5K924QjzEMYf2usZA7WhhmrpOLqipRpEubSqFiflzW0H8MfMIc3aHgjqSR0hhTfBThxrvXCUWFnmwT1ce5N-rLke_VpPfDWhvYyd_5wPv9s3KWUyDC8KSMuw",likablity:54},{uri:"https://theawesomedaily.com/wp-content/uploads/2017/08/pictures-of-cool-cars-24-1.jpg",likablity:45},{uri:"https://i.pinimg.com/originals/45/3e/ca/453ecab8ded493d5fc69887f5d670b0d.jpg",likablity:69},{uri:"https://images.unsplash.com/photo-1612468008274-9445bd56161e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29vbCUyMGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",likablity:69},{uri:"https://lh3.googleusercontent.com/proxy/I-U-WETeol5OfhV41K5K924QjzEMYf2usZA7WhhmrpOLqipRpEubSqFiflzW0H8MfMIc3aHgjqSR0hhTfBThxrvXCUWFnmwT1ce5N-rLke_VpPfDWhvYyd_5wPv9s3KWUyDC8KSMuw",likablity:54},{uri:"https://theawesomedaily.com/wp-content/uploads/2017/08/pictures-of-cool-cars-24-1.jpg",likablity:45},{uri:"https://i.pinimg.com/originals/45/3e/ca/453ecab8ded493d5fc69887f5d670b0d.jpg",likablity:69},{uri:"https://images.unsplash.com/photo-1612468008274-9445bd56161e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29vbCUyMGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",likablity:69},{uri:"https://lh3.googleusercontent.com/proxy/I-U-WETeol5OfhV41K5K924QjzEMYf2usZA7WhhmrpOLqipRpEubSqFiflzW0H8MfMIc3aHgjqSR0hhTfBThxrvXCUWFnmwT1ce5N-rLke_VpPfDWhvYyd_5wPv9s3KWUyDC8KSMuw",likablity:54},{uri:"https://theawesomedaily.com/wp-content/uploads/2017/08/pictures-of-cool-cars-24-1.jpg",likablity:45},{uri:"https://i.pinimg.com/originals/45/3e/ca/453ecab8ded493d5fc69887f5d670b0d.jpg",likablity:69},{uri:"https://images.unsplash.com/photo-1612468008274-9445bd56161e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29vbCUyMGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",likablity:69},{uri:"https://lh3.googleusercontent.com/proxy/I-U-WETeol5OfhV41K5K924QjzEMYf2usZA7WhhmrpOLqipRpEubSqFiflzW0H8MfMIc3aHgjqSR0hhTfBThxrvXCUWFnmwT1ce5N-rLke_VpPfDWhvYyd_5wPv9s3KWUyDC8KSMuw",likablity:54},{uri:"https://theawesomedaily.com/wp-content/uploads/2017/08/pictures-of-cool-cars-24-1.jpg",likablity:45},{uri:"https://i.pinimg.com/originals/45/3e/ca/453ecab8ded493d5fc69887f5d670b0d.jpg",likablity:69},{uri:"https://images.unsplash.com/photo-1612468008274-9445bd56161e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29vbCUyMGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",likablity:69},{uri:"https://lh3.googleusercontent.com/proxy/I-U-WETeol5OfhV41K5K924QjzEMYf2usZA7WhhmrpOLqipRpEubSqFiflzW0H8MfMIc3aHgjqSR0hhTfBThxrvXCUWFnmwT1ce5N-rLke_VpPfDWhvYyd_5wPv9s3KWUyDC8KSMuw",likablity:54},{uri:"https://theawesomedaily.com/wp-content/uploads/2017/08/pictures-of-cool-cars-24-1.jpg",likablity:45},{uri:"https://i.pinimg.com/originals/45/3e/ca/453ecab8ded493d5fc69887f5d670b0d.jpg",likablity:69},{uri:"https://images.unsplash.com/photo-1612468008274-9445bd56161e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29vbCUyMGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",likablity:69},{uri:"https://lh3.googleusercontent.com/proxy/I-U-WETeol5OfhV41K5K924QjzEMYf2usZA7WhhmrpOLqipRpEubSqFiflzW0H8MfMIc3aHgjqSR0hhTfBThxrvXCUWFnmwT1ce5N-rLke_VpPfDWhvYyd_5wPv9s3KWUyDC8KSMuw",likablity:54},{uri:"https://theawesomedaily.com/wp-content/uploads/2017/08/pictures-of-cool-cars-24-1.jpg",likablity:45},{uri:"https://i.pinimg.com/originals/45/3e/ca/453ecab8ded493d5fc69887f5d670b0d.jpg",likablity:69},{uri:"https://images.unsplash.com/photo-1612468008274-9445bd56161e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29vbCUyMGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",likablity:69},{uri:"https://lh3.googleusercontent.com/proxy/I-U-WETeol5OfhV41K5K924QjzEMYf2usZA7WhhmrpOLqipRpEubSqFiflzW0H8MfMIc3aHgjqSR0hhTfBThxrvXCUWFnmwT1ce5N-rLke_VpPfDWhvYyd_5wPv9s3KWUyDC8KSMuw",likablity:54},{uri:"https://theawesomedaily.com/wp-content/uploads/2017/08/pictures-of-cool-cars-24-1.jpg",likablity:45},{uri:"https://i.pinimg.com/originals/45/3e/ca/453ecab8ded493d5fc69887f5d670b0d.jpg",likablity:69},{uri:"https://images.unsplash.com/photo-1612468008274-9445bd56161e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29vbCUyMGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",likablity:69},{uri:"https://lh3.googleusercontent.com/proxy/I-U-WETeol5OfhV41K5K924QjzEMYf2usZA7WhhmrpOLqipRpEubSqFiflzW0H8MfMIc3aHgjqSR0hhTfBThxrvXCUWFnmwT1ce5N-rLke_VpPfDWhvYyd_5wPv9s3KWUyDC8KSMuw",likablity:54},{uri:"https://theawesomedaily.com/wp-content/uploads/2017/08/pictures-of-cool-cars-24-1.jpg",likablity:45},{uri:"https://i.pinimg.com/originals/45/3e/ca/453ecab8ded493d5fc69887f5d670b0d.jpg",likablity:69},{uri:"https://images.unsplash.com/photo-1612468008274-9445bd56161e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29vbCUyMGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",likablity:69},{uri:"https://lh3.googleusercontent.com/proxy/I-U-WETeol5OfhV41K5K924QjzEMYf2usZA7WhhmrpOLqipRpEubSqFiflzW0H8MfMIc3aHgjqSR0hhTfBThxrvXCUWFnmwT1ce5N-rLke_VpPfDWhvYyd_5wPv9s3KWUyDC8KSMuw",likablity:54},{uri:"https://theawesomedaily.com/wp-content/uploads/2017/08/pictures-of-cool-cars-24-1.jpg",likablity:45},{uri:"https://i.pinimg.com/originals/45/3e/ca/453ecab8ded493d5fc69887f5d670b0d.jpg",likablity:69},{uri:"https://images.unsplash.com/photo-1612468008274-9445bd56161e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29vbCUyMGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",likablity:69},{uri:"https://lh3.googleusercontent.com/proxy/I-U-WETeol5OfhV41K5K924QjzEMYf2usZA7WhhmrpOLqipRpEubSqFiflzW0H8MfMIc3aHgjqSR0hhTfBThxrvXCUWFnmwT1ce5N-rLke_VpPfDWhvYyd_5wPv9s3KWUyDC8KSMuw",likablity:54},{uri:"https://theawesomedaily.com/wp-content/uploads/2017/08/pictures-of-cool-cars-24-1.jpg",likablity:45},{uri:"https://i.pinimg.com/originals/45/3e/ca/453ecab8ded493d5fc69887f5d670b0d.jpg",likablity:69},{uri:"https://images.unsplash.com/photo-1612468008274-9445bd56161e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29vbCUyMGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",likablity:69},{uri:"https://lh3.googleusercontent.com/proxy/I-U-WETeol5OfhV41K5K924QjzEMYf2usZA7WhhmrpOLqipRpEubSqFiflzW0H8MfMIc3aHgjqSR0hhTfBThxrvXCUWFnmwT1ce5N-rLke_VpPfDWhvYyd_5wPv9s3KWUyDC8KSMuw",likablity:54},{uri:"https://theawesomedaily.com/wp-content/uploads/2017/08/pictures-of-cool-cars-24-1.jpg",likablity:45},{uri:"https://i.pinimg.com/originals/45/3e/ca/453ecab8ded493d5fc69887f5d670b0d.jpg",likablity:69},{uri:"https://images.unsplash.com/photo-1612468008274-9445bd56161e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29vbCUyMGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",likablity:69},{uri:"https://lh3.googleusercontent.com/proxy/I-U-WETeol5OfhV41K5K924QjzEMYf2usZA7WhhmrpOLqipRpEubSqFiflzW0H8MfMIc3aHgjqSR0hhTfBThxrvXCUWFnmwT1ce5N-rLke_VpPfDWhvYyd_5wPv9s3KWUyDC8KSMuw",likablity:54},{uri:"https://theawesomedaily.com/wp-content/uploads/2017/08/pictures-of-cool-cars-24-1.jpg",likablity:45},{uri:"https://i.pinimg.com/originals/45/3e/ca/453ecab8ded493d5fc69887f5d670b0d.jpg",likablity:69},{uri:"https://images.unsplash.com/photo-1612468008274-9445bd56161e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29vbCUyMGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",likablity:69},{uri:"https://lh3.googleusercontent.com/proxy/I-U-WETeol5OfhV41K5K924QjzEMYf2usZA7WhhmrpOLqipRpEubSqFiflzW0H8MfMIc3aHgjqSR0hhTfBThxrvXCUWFnmwT1ce5N-rLke_VpPfDWhvYyd_5wPv9s3KWUyDC8KSMuw",likablity:54},{uri:"https://theawesomedaily.com/wp-content/uploads/2017/08/pictures-of-cool-cars-24-1.jpg",likablity:45},{uri:"https://i.pinimg.com/originals/45/3e/ca/453ecab8ded493d5fc69887f5d670b0d.jpg",likablity:69},{uri:"https://images.unsplash.com/photo-1612468008274-9445bd56161e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29vbCUyMGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",likablity:69},{uri:"https://lh3.googleusercontent.com/proxy/I-U-WETeol5OfhV41K5K924QjzEMYf2usZA7WhhmrpOLqipRpEubSqFiflzW0H8MfMIc3aHgjqSR0hhTfBThxrvXCUWFnmwT1ce5N-rLke_VpPfDWhvYyd_5wPv9s3KWUyDC8KSMuw",likablity:54},{uri:"https://theawesomedaily.com/wp-content/uploads/2017/08/pictures-of-cool-cars-24-1.jpg",likablity:45}]})=>{
  return(
    <View>
      <ImageBackground style={styles.firstPlace} source={{uri:data[0].uri}}></ImageBackground>
      <FlatList
        data={data}
        renderItem={({item})=><Image style={{height:100,width:100}} source={{uri:item.uri}}/>}
        keyExtractor={(_,key)=>key}
      />
    </View>
  )
}

const styles=StyleSheet.create({
  firstPlace:{
    width:Dimensions.get("window").width,
    height:Dimensions.get("window").height/3
  }
})

export default LeaderboardList