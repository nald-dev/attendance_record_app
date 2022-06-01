import React from 'react'
import { Text, TouchableOpacity, SafeAreaView } from 'react-native'

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style = {{
        alignItems: 'center',
        backgroundColor: 'teal',
        flex: 1,
        justifyContent: 'center'
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate('AnotherScreen')}
        style = {{
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 10
        }}
      >
        <Text
          style = {{
            fontSize: 20,
            fontWeight: 'bold'
          }}
        >
          Go To Another Page
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default HomeScreen