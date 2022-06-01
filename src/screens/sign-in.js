import React, { useEffect, useRef, useState } from 'react'
import { Alert, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, SafeAreaView, View } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import BASE_URL from '../helpers/base-url'

const SignInScreen = ({navigation}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const passwordInput = useRef()

  useEffect(() => {
    checkAvailableSession()
  }, [])

  const checkAvailableSession = async() => {
    const loginData = await AsyncStorage.getItem('loginData')

    if (loginData) {
      navigation.replace('HomeScreen')
    }
  }

  const signIn = () => {
    const formData = new FormData()

    formData.append('username', username)
    formData.append('password', password)

    fetch(`${BASE_URL}/sign-in`, {
      headers: {
        Accept: 'application/json',
        'Content-type': 'multipart/form-data'
      },
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(async(resJSON) => {
      if (resJSON.status === 'success') {
        await AsyncStorage.setItem('loginData', JSON.stringify(resJSON.data))

        navigation.replace('HomeScreen')
      } else {
        Alert.alert('Infomation', resJSON.info)
      }
    })
  }

  return (
    <SafeAreaView
      style = {{
        backgroundColor: 'lightgray',
        flex: 1,
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style = {{
          flex: 1,
        }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            padding: 20,
          }}
          style={{
            flex: 1
          }}
        >
          <Text
            style={{
              color: 'black',
              fontSize: 32,
              fontWeight: 'bold',
              textAlign: 'center'
            }}
          >
            {'Attendance\nApp Sign In'}
          </Text>

          <View
            style = {{
              flex: 1,
              justifyContent: 'center'
            }}
          >
            <TextInput
              autoCapitalize='none'
              onChangeText={setUsername}
              onSubmitEditing={() => passwordInput.current.focus()}
              placeholder='Username'
              placeholderTextColor='gray'
              returnKeyType='next'
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                color: 'black',
                paddingHorizontal: 20,
                paddingVertical: 15,
              }}
            />

            <TextInput
              autoCapitalize='none'
              onChangeText={setPassword}
              placeholder='Password'
              placeholderTextColor='gray'
              ref={passwordInput}
              returnKeyType='done'
              secureTextEntry
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                color: 'black',
                marginTop: 20,
                paddingHorizontal: 20,
                paddingVertical: 15,
              }}
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.6}
            disabled={username.trim() === '' || password === ''}
            onPress={signIn}
            style = {{
              backgroundColor: username.trim() === '' || password === '' ? 'gray' : 'forestgreen',
              borderRadius: 10,
              padding: 15,
            }}
          >
            <Text
              style = {{
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SignInScreen