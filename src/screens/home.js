import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

const HomeScreen = ({navigation}) => {
	return (
		<SafeAreaView
			style = {{
        backgroundColor: 'lightgray',
				flex: 1
			}}
		>
			<View
				style = {{
					flex: 1,
					padding: 20
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
						Attendance App
				</Text>

				<View
					style = {{
						flex: 1,
						justifyContent: 'center'
					}}
				>
					<TouchableOpacity
            activeOpacity={0.6}
						onPress = {() => navigation.navigate('DailyLoginLogoutScreen')}
            style = {{
              backgroundColor: 'black',
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
              Daily Login Logout
            </Text>
          </TouchableOpacity>

					<TouchableOpacity
            activeOpacity={0.6}
						onPress = {() => navigation.navigate('AbsenceScreen')}
            style = {{
              backgroundColor: 'black',
              borderRadius: 10,
							marginTop: 20,
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
              Absence
            </Text>
          </TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default HomeScreen