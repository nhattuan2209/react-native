import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import Icon from 'react-native-vector-icons/FontAwesome';

GoogleSignin.configure({
    webClientId: 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
});

const LoginScreen = () => {

    const signInWithGoogle = async () => {
        try {
            const { idToken } = await GoogleSignin.signIn();
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            await auth().signInWithCredential(googleCredential);
            console.log('Signed in with Google!');
        } catch (error) {
            console.error('Error signing in with Google: ', error);
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center' }}>
            <View style={{ alignItems: 'center',}}>
                <Text style={{ fontFamily: "Lobster-Regular", fontSize: 40, fontWeight: '500', color: 'black' }}>
                    Instagram
                </Text>
            </View>
            <View style={{ alignItems: 'center', }}>
                <TextInput placeholder='Phone number, username or email'
                    style={{
                        width: '95%',
                        padding: 10,
                        marginTop: 12,
                        backgroundColor: '#D3D3D3',
                    }}
                />
                <TextInput placeholder='Password' secureTextEntry={true}
                    style={{
                        width: '95%',
                        padding: 10,
                        marginTop: 12,
                        backgroundColor: '#D3D3D3',
                    }}
                />
            </View>
            <Text style={{ color: 'blue', textAlign: 'right', marginTop: 10 }}>Forgot Password?</Text>
            <TouchableOpacity style={{backgroundColor: 'blue', width: '95%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', padding: 10, marginTop: 10}}>
                <Text style={{fontSize: 16 , color: 'white'}}>Login</Text>
            </TouchableOpacity>
            <Text style={{textAlign: 'center', marginVertical: 10, fontWeight: '500', fontSize: 16}}>OR</Text>
            
            <GoogleSigninButton
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={signInWithGoogle}
            // disabled={this.state.isSigninInProgress}
            />
        </View>
    )
}

export default LoginScreen