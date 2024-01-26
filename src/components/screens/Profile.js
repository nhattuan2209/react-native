import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FriendsProfileData } from '../screenComponents/Database';
import Ionics from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Profile = () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', }}>
      <View>
        {FriendsProfileData.slice(0, 1).map((data, index) => {
          return (
            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft: 5 }}>
                  <Text style={{ fontSize: 25, fontWeight: 'bold', paddingHorizontal: 5, paddingVertical: 10 }}>{data.name}</Text>
                  <Ionics name="chevron-down" style={{ fontSize: 20, fontWeight: 'bold', }} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity >
                    <Feather name="plus-square" style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Feather name="menu" style={{ fontSize: 25, fontWeight: 'bold', paddingHorizontal: 10, color: 'black' }} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 20 }}>
                <View>
                  <Image source={data.profileImage} style={{ width: 80, height: 80, borderRadius: 100, }} />
                  <Text style={{ fontSize: 18, fontWeight: 'bold', paddingTop: 10 }}>{data.accountName}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: '', alignItems: 'center', }}>
                  <View style={{ paddingHorizontal: 25, alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{data.post}</Text>
                    <Text>Posts</Text>
                  </View>
                  <View style={{ paddingHorizontal: 25, alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{data.followers}</Text>
                    <Text>Followers</Text>
                  </View>
                  <View style={{ paddingHorizontal: 25, alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{data.following}</Text>
                    <Text>Following</Text>
                  </View>
                </View>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ alignItems: 'center', paddingVertical: 8, borderWidth: 0.5, width: '90%' }}>
                  <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Edit Profile</Text>
                </View>
              </View>
            </View>
          )
        })}
      </View>
      <View style={{ paddingHorizontal: 10, paddingTop: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Story Hightlights</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingVertical: 20 }}>
          {
            FriendsProfileData.slice(1, 9).map((data, index) => {
              return (
                <View style={{ flexDirection: 'column', paddingHorizontal: 8, position: 'relative' }}>
                  <View style={{ width: 68, height: 68, backgroundColor: 'white', borderWidth: 1.8, borderRadius: 100, borderColor: '#c13584', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={data.profileImage} style={{ resizeMode: 'cover', width: '92%', height: '92%', borderRadius: 100 }} />
                  </View>
                </View>
              )
            })
          }
        </ScrollView>
      </View>
      
    </SafeAreaView>
  );
}


export default Profile;
