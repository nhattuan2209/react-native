import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";
import {useNavigation} from "@react-navigation/native";
const Stories = () => {

    const navigation = useNavigation()

    const storyInfo = [
        {
            id: 1,
            name: 'Your Story',
            image: require('../../storage/images/image1.jpg'),
        },{
            id: 0,
            name: 'User 1',
            image: require('../../storage/images/image2.jpg'),
        },{
            id: 0,
            name: 'User 2',
            image: require('../../storage/images/image3.jpg'),
        },{
            id: 0,
            name: 'User 3',
            image: require('../../storage/images/image4.jpg'),
        },{
            id: 0,
            name: 'User 4',
            image: require('../../storage/images/image5.jpg'),
        },{
            id: 0,
            name: 'User 5',
            image: require('../../storage/images/image6.jpg'),
        },{
            id: 0,
            name: 'User 6',
            image: require('../../storage/images/image7.jpg'),
        },{
            id: 0,
            name: 'User 7',
            image: require('../../storage/images/image8.jpg'),
        },{
            id: 0,
            name: 'User 8',
            image: require('../../storage/images/image9.jpg'),
        },{
            id: 0,
            name: 'User 9',
            image: require('../../storage/images/image10.jpg'),
        },
    ]
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingVertical: 20}}>
        {
            storyInfo.map((data, index) => {
                return(
                    <TouchableOpacity key={index} onPress={ () => navigation.push("Status", { name: data.name, image: data.image}) }>
                        <View 
                            style={{flexDirection: 'column', paddingHorizontal: 8, position: 'relative'}}>
                            {
                                data.id == 1 ?
                                (
                                    <View style={{position:'absolute', bottom: 15, right: 10, zIndex: 1,}}>
                                        <Entypo name="circle-with-plus"  style={{fontSize: 20, color: "#405de6", backgroundColor: "#fff", borderRadius: 100 }}/>
                                    </View>
                                ) : null
                            } 
                            <View style={{width: 68, height: 68, backgroundColor: 'white', borderWidth:1.8, borderRadius: 100, borderColor: '#c13584', justifyContent: 'center', alignItems: 'center'}}>
                                <Image source={data.image} style={{resizeMode: 'cover', width:'92%', height: '92%', borderRadius: 100}}/>
                            </View>
                            <Text style={{textAlign: 'center', fontSize: 10, opacity: data.id == 0 ? 1 : 0.5 ,}}>{data.name}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }
            )
        }
      </ScrollView>
    );
  }


export default Stories;
