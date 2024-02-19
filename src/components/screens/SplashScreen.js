import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../storage/images/logo.png'
import Meta from '../../storage/images/meta.png'
const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace("Bottom"); // Chuyển hướng đến màn hình chính
        }, 3000); // 3000 milliseconds = 3 giây

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style= {{ flex: 1}}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View >
                    <Image source={Logo} style={{ width: 130, height: 130 }} />
                </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                    From
                </Text>
                <Image source={Meta} style={{ width: 200, height: 40 }} />
            </View>
        </View>
    );
};

export default SplashScreen;
