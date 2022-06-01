import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './src/screens/home'
import AnotherScreen from './src/screens/another'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
        />

        <Stack.Screen
          name='AnotherScreen'
          component={AnotherScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App