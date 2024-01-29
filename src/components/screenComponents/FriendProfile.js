import { View, Text } from 'react-native'
import React from 'react'

const FriendProfile = ({route}) => {
    const {name, profile, follow, post, followers, following} = route.params;
  return (
    <View>
      <Text>FriendProfile {name}</Text>
    </View>
  )
}

export default FriendProfile