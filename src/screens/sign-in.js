import React, { useRef } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, SafeAreaView, View } from 'react-native'

const SignInScreen = ({navigation}) => {
  const passwordInput = useRef()

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
            style = {{
              backgroundColor: 'forestgreen',
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