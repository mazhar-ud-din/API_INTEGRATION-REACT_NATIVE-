import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { StatusBar } from 'react-native';
import NavigationString from '../Constant/NavigationString/NavigationString';
import { LoginScreen, ProductScreen } from '../Screen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <>
        <StatusBar backgroundColor={'transparent'} translucent barStyle={'light-content'} />

      
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name={NavigationString.LOGIN} component={LoginScreen} />
            <Stack.Screen name={NavigationString.PRODUCT} component={ProductScreen} />

        </Stack.Navigator>
        </>
    );
}

export default AuthStack;