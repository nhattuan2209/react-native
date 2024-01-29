/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionic from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {createNativeStackNavigator} from  "@react-navigation/native-stack"
import Home from './src/components/screens/Home';
import Activity from './src/components/screens/Activity';
import Profile from './src/components/screens/Profile';
import Reels from './src/components/screens/Reels';
import Search from './src/components/screens/Search';
import Status from './src/components/screenComponents/Status';
import FriendProfile from './src/components/screenComponents/FriendProfile';


const App = () => {

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const BottomTabScreen = () => {
  return(
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle:{
          height: 50
        },

        tabBarIcon: ({focused, size , colour}) => {
          let iconName;
          if(route.name === "Home"){
            iconName = focused ? "home-sharp" : "home-outline";
            size = focused ? size + 8 : size + 2;
          } else if(route.name === "Search"){
            iconName = focused ? "search" : "search-outline";
          }  else if(route.name === "Reels"){
            iconName = focused ? "caret-forward-circle" : "caret-forward-circle-outline";
          } else if(route.name === "Activity"){
            iconName = focused ? "heart" : "heart-outline";
          } else if(route.name === "Profile"){
            iconName = focused ? "person-circle" : "person-outline";
          }

          return <Ionic name={iconName} size={size} color={colour}/>
        }
      })}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Search" component={Search}/>
        <Tab.Screen name="Reels" component={Reels}/>
        <Tab.Screen name="Activity" component={Activity}/>
        <Tab.Screen name="Profile" component={Profile}/>

    </Tab.Navigator>
  )
}

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Bottom" component={BottomTabScreen}/>
        <Stack.Screen name="Status" component={Status}/>
        <Stack.Screen name="FriendProfile" component={FriendProfile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
