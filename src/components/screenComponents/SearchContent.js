import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'

const SearchContent = () => {

    const searchData = [
        {
          id: 0,
          image: require('../../storage/images/image1.jpg')
        },
        {
            id: 1,
            image: require('../../storage/images/image2.jpg')
        },
        {
            id: 2,
            image: require('../../storage/images/image3.jpg')
        },
        {
            id: 3,
            image: require('../../storage/images/image4.jpg')
        },
        {
            id: 4,
            image: require('../../storage/images/image5.jpg')
        },
        {
            id: 5,
            image: require('../../storage/images/image6.jpg')
        },
        {
            id: 6,
            image: require('../../storage/images/image7.jpg')
        },
        {
            id: 7,
            image: require('../../storage/images/image8.jpg')
        },
        {
            id: 8,
            image: require('../../storage/images/image9.jpg')
        },
        {
            id: 9,
            image: require('../../storage/images/image10.jpg')
        },
        {
            id: 10,
            image: require('../../storage/images/image1.jpg')
        },
    ]

    const renderItem = ({ item }) => (
        <View style={{ width: '32%',padding: 2}}>
          <Image source={item.image} style={{width: '100%', height: 140,}} />
        </View>
      );

    return (
        <View>
            <FlatList
                data={searchData}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3} // Số cột muốn hiển thị
                renderItem={renderItem}
            />
        </View>

    )
}

export default SearchContent