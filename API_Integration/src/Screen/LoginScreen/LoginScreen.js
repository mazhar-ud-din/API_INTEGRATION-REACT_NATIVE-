import React,{useEffect, useState} from 'react'
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import ConstantImage from '../../Constant/image/image'
import NavigationString from '../../Constant/NavigationString/NavigationString'
import styles from './styles'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

export default function LoginScreen({ navigation }) {

useEffect(()=>{
GoogleSignin.configure()
},[])
const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(`userInfo`,userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log(`userInfo false`,error);
      // user cancelled the login flow 
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      console.log(`userInfo false`,error);

      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      console.log(`userInfo`,error);

      } else {
        // some other error happened
      console.log(`userInfo false`,error);

      }
    }
  };

    const goToScreen=()=>{
        navigation.navigate(NavigationString.PRODUCT)
    }
    const [Email, setEmail] = useState(``)
    const [PassWord, setPassWord] = useState(``)

    console.log(`data`,Email,PassWord);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.Container}>
                <View style={styles.Head}>
                    <TextInput
                        placeholder='Email'
                        style={styles.Input}
                        onChangeText={(Email)=>setEmail(Email)}
                    />
                    <TextInput
                        style={styles.Input}
                        placeholder='PassWord'
                        onChangeText={(PassWord)=>setPassWord(PassWord)}
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.Bottom} onPress={goToScreen}>
                        <Text style={styles.TextStyle}>Click Me</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Logo}>
                    <TouchableOpacity onPress={googleLogin}>
                        <Image source={ConstantImage.GoogleIcon} style={styles.ImgStyle} />
                    </TouchableOpacity>
                    <Text style={styles.TextStyles}>Or</Text>
                    <TouchableOpacity>
                        <Image source={ConstantImage.FacebookIcon} style={styles.ImgStyle} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

