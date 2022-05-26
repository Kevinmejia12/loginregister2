import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../pantallas/Home'
import { SafeAreaView } from 'react-native-safe-area-context'
import Register from '../pantallas/Register'
import BTnLogin from '../assets/components/BTnLogin'
import ConfirmarRegister from '../pantallas/ConfirmarRegister'
const Stack= createNativeStackNavigator()

const MainStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown:false
            }}
            >
            <Stack.Screen
            name='Home'
            component={ Home }
            />
            <Stack.Screen
            name='Register'
            component={ Register }
            />
            <Stack.Screen
            name='BtnLogin'
            component={BTnLogin}
            />
            <Stack.Screen 
            name='ConfirmarRegister'
            component={ConfirmarRegister}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStack
