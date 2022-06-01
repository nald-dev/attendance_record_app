import React from 'react'
import { SafeAreaView } from 'react-native'

const AnotherScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style = {{
        backgroundColor: 'orange',
        flex: 1,
      }}
    />
  )
}

export default AnotherScreen