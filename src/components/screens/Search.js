import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import SearchBox from '../screenComponents/SearchBox';
import SearchContent from '../screenComponents/SearchContent';

const Search = () => {
    return (
      <View style={{flex: 1, backgroundColor: 'white', position: 'relative'}}>
        <ScrollView>
          <SearchBox/>
          <SearchContent/>
        </ScrollView>
      </View>
    );
  }


export default Search;
