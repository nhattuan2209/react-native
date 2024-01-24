import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useRef } from 'react'
import Video from 'react-native-video';
import Ionic from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useState } from 'react';

 

const SingleReel = ({item, index, currentIndex}) => {

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const videoRef = useRef(null)

  const onBuffer = buffer =>{
    console.log("buffring",buffer);
  }

  const onError = error =>{
    console.log("error", error);
  }

  const [like, setLike] = useState(item.isLike)

  return (
    <View style={{width: windowWidth, height: windowHeight, position: 'relative'}}>
      <TouchableOpacity style={{
            width:'100%',
            height: '100%',
            position: 'absolute'
          }}>
          {/* <Video
          videoRef={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          resizeMode= 'cover'
          paused={false}
          source={item.video}
          style={{
            width:'100%',
            height: '100%',
            position: 'absolute'
          }}
          /> */}
          {/* <View  style={{
            backgroundColor: 'gray',
            width:'100%',
            height: '100%',
            position: 'absolute'}}>
          </View> */}
      </TouchableOpacity>
      <View>
        <View style={{alignItems: 'flex-end', position: 'relative', top: 515, padding: 10,}}>
          <TouchableOpacity onPress={() => setLike(!like)}>
            <AntDesign name={like ? "heart" : "hearto"} style={{fontSize: 35, paddingBottom: 5,  color:  like ? 'red' : '#fff'}}/>
          </TouchableOpacity>
          <Text style={{paddingBottom: 10, color: '#fff'}}>{item.likes}</Text>
          <Ionic name="chatbubble-outline"  style={{fontSize: 35, paddingBottom: 10, color: '#fff'}}/>
          <Text  style={{paddingBottom: 10, color: '#fff'}}>{item.comment}</Text>
          <Ionic name="navigate-outline"  style={{fontSize: 35, color: '#fff' }}/>
          <Text  style={{fontSize: 30, color: '#fff'}}>...</Text>
        </View>
        <View style={{top:400}}>
          <View style={{flexDirection: 'row', alignItems: 'center',padding: 15,}}> 
            <Image source={item.avatar} style={{width: 40, height: 40, borderRadius: 100}}/>
            <Text style={{fontSize: 20, color: '#fff', paddingLeft: 15}}>{item.title}</Text>
          </View>
          <View>
            <Text style={{fontSize: 15, color: '#fff', padding: 15}}>{item.description}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default SingleReel