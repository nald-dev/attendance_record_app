import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignInScreen from './src/screens/sign-in'
import HomeScreen from './src/screens/home'
import DailyLoginLogoutScreen from './src/screens/daily-login-logout'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name='SignInScreen'
          component={SignInScreen}
        />

        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
        />

        <Stack.Screen
          name='DailyLoginLogoutScreen'
          component={DailyLoginLogoutScreen}
          options={{
            headerShown: true,
            title: 'Daily Login Logout'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App