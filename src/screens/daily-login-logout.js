import React from 'react'
import { Alert, PermissionsAndroid, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import Geolocation from 'react-native-geolocation-service'

const userId = 2

const chats = [
	{
		id: 1,
		owner_id: 2,
		value: 'Rey Break',
		time: '11:01'
	},
	{
		id: 2,
		owner_id: 1,
		value: 'Nova Break',
		time: '12:12'
	},
]

const DailyLoginLogoutScreen = ({navigation}) => {
	const requestLocationPermission = async() => {
	  try {
		const granted = await PermissionsAndroid.request(
		  PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
		  {
			'title': 'Example App',
			'message': 'Example App access to your location '
		  }
		)
		if (granted === PermissionsAndroid.RESULTS.GRANTED) {
		  console.log("You can use the location")
		} else {
		  console.log("location permission denied")
		}
	  } catch (err) {
		console.warn(err)
	  }
	}

	const submitLogin = async() => {
		await requestLocationPermission()

		Geolocation.getCurrentPosition(
			(position) => {
			  navigation.navigate('LoginLogoutFormScreen', {title: 'Login', position})
			},
			() => {
				Alert.alert('Information', 'Failed to get your location')
			},
			{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
		)
	}

	const submitBreak = () => {
		Alert.alert(
			'Break?',
			'Are you sure want to take a break?',
			[
				{
					text: 'Yes',
					onPress: () => {},
					style: 'destructive'
				},
				{
					text: 'Cancel',
					onPress: () => {}
				}
			]
		)
	}

	const submitBack = () => {
		Alert.alert(
			'Back?',
			'Are you sure want to set your status as back?',
			[
				{
					text: 'Yes',
					onPress: () => {},
					style: 'destructive'
				},
				{
					text: 'Cancel',
					onPress: () => {}
				}
			]
		)
	}

	const submitLogout = async() => {
		await requestLocationPermission()
		
		Geolocation.getCurrentPosition(
			(position) => {
			  navigation.navigate('LoginLogoutFormScreen', {title: 'Logout', position})
			},
			() => {
				Alert.alert('Information', 'Failed to get your location')
			},
			{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
		)
	}

	return (
		<SafeAreaView
			style = {{
				backgroundColor: 'lightgray',
				flex: 1
			}}
		>
			<ScrollView
				contentContainerStyle = {{
					flexGrow: 1,
					paddingHorizontal: 20,
					paddingBottom: 20
				}}
				style = {{
					flex: 1
				}}
			>
				{
					chats.map(chat => {
						return (
							<TouchableOpacity
								activeOpacity={0.6}
								key = {chat.id}
								style = {{
									alignSelf: chat.owner_id === userId ? 'flex-end' : 'flex-start',
									backgroundColor: chat.owner_id === userId ? 'green' : 'steelblue',
									borderRadius: 15,
									marginTop: 20,
									padding: 15
								}}
							>
								<Text
									style = {{
										color: 'white',
										fontSize: 16
									}}
								>
									{chat.value}
								</Text>

								<Text
									style = {{
										color: 'white',
										fontSize: 12,
										marginTop: 5,
										textAlign: 'right'
									}}
								>
									{chat.time}
								</Text>
							</TouchableOpacity>
						)
					})
				}
			</ScrollView>

			<View
				style = {{
					backgroundColor: 'rgb(240,240,240)',
					borderTopStartRadius: 20,
					borderTopEndRadius: 20,
					padding: 20
				}}
			>
				<View
					style = {{
						flexDirection: 'row'
					}}
				>
					<TouchableOpacity
						onPress={submitLogin}
						style = {{
							backgroundColor: 'white',
							borderRadius: 15,
							borderWidth: 1,
							flex: 1,
							padding: 15
						}}
					>
						<Text
							style = {{
								color: 'black',
								fontWeight: 'bold',
								textAlign: 'center'
							}}
						>
							Login
						</Text>
					</TouchableOpacity>

					<View
						style = {{
							width: 10
						}}
					/>

					<TouchableOpacity
						onPress={submitBreak}
						style = {{
							backgroundColor: 'white',
							borderRadius: 15,
							borderWidth: 1,
							flex: 1,
							padding: 15
						}}
					>
						<Text
							style = {{
								color: 'black',
								fontWeight: 'bold',
								textAlign: 'center'
							}}
						>
							Break
						</Text>
					</TouchableOpacity>
				</View>

				<View
					style = {{
						flexDirection: 'row',
						marginTop: 10
					}}
				>
					<TouchableOpacity
						onPress={submitBack}
						style = {{
							backgroundColor: 'white',
							borderRadius: 15,
							borderWidth: 1,
							flex: 1,
							padding: 15
						}}
					>
						<Text
							style = {{
								color: 'black',
								fontWeight: 'bold',
								textAlign: 'center'
							}}
						>
							Back
						</Text>
					</TouchableOpacity>

					<View
						style = {{
							width: 10
						}}
					/>

					<TouchableOpacity
						onPress={submitLogout}
						style = {{
							backgroundColor: 'white',
							borderRadius: 15,
							borderWidth: 1,
							flex: 1,
							padding: 15
						}}
					>
						<Text
							style = {{
								color: 'black',
								fontWeight: 'bold',
								textAlign: 'center'
							}}
						>
							Logout
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default DailyLoginLogoutScreen