import React, { useEffect, useState } from 'react'
import { Alert, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import BASE_URL from '../helpers/base-url'

const AbsenceScreen = ({navigation}) => {
	const [userId, setUserId] = useState(null)
	const [userName, setUserName] = useState('')

	useEffect(() => {
		loadUserData()
	}, [])

	const loadUserData = async() => {
		const { id, name } = JSON.parse(await AsyncStorage.getItem('loginData'))
		
		setUserId(id)
		setUserName(name)
	}

	const submitSickLeave = () => {
		Alert.alert(
			'Sick Leave?',
			'Are you sure want to take a sick leave today?',
			[
				{
					text: 'Yes',
					onPress: () => {
						const formData = new FormData()
							
						formData.append('sender_id', userId)
						formData.append('type', 'leave')
						formData.append('value', `${userName} is taking sick leave today`)
				
						fetch(`${BASE_URL}/submit-status`, {
							headers: {
								Accept: 'application/json',
								'Content-type': 'multipart/form-data'
							},
							method: 'POST',
							body: formData
							})
							.then(res => res.json())
							.then(resJSON => {
							if (resJSON.status === 'created') {
								Alert.alert(
									'Information',
									resJSON.info,
									[
										{
											onPress: navigation.goBack,
											text: 'OK'
										}
									],
									{
										cancelable: false
									}
								)
							} else {
								Alert.alert('Information', resJSON.info)
							}
						})
					},
					style: 'destructive'
				},
				{
					text: 'Cancel',
					onPress: () => {}
				}
			]
		)
	}

	const submitAnnualLeave = () => {
		Alert.alert(
			'Annual Leave?',
			'Are you sure want to take an annual leave allowance today?',
			[
				{
					text: 'Yes',
					onPress: () => {
						const formData = new FormData()
							
						formData.append('sender_id', userId)
						formData.append('type', 'leave')
						formData.append('value', `${userName} is taking annual leave today`)
				
						fetch(`${BASE_URL}/submit-status`, {
							headers: {
								Accept: 'application/json',
								'Content-type': 'multipart/form-data'
							},
							method: 'POST',
							body: formData
							})
							.then(res => res.json())
							.then(resJSON => {
							if (resJSON.status === 'created') {
								Alert.alert(
									'Information',
									resJSON.info,
									[
										{
											onPress: navigation.goBack,
											text: 'OK'
										}
									],
									{
										cancelable: false
									}
								)
							} else {
								Alert.alert('Information', resJSON.info)
							}
						})
					},
					style: 'destructive'
				},
				{
					text: 'Cancel',
					onPress: () => {}
				}
			]
		)
	}
	
	const submitOtherReasonLeave = () => {
		Alert.alert(
			'Other Reason Leave?',
			'Are you sure want to take an other reason leave today?',
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
					justifyContent: 'center',
					padding: 20
				}}
			>
				<TouchableOpacity
					activeOpacity={0.6}
					onPress={submitSickLeave}
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
						Sick Leave
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					activeOpacity={0.6}
					onPress={submitAnnualLeave}
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
						Annual Leave
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					activeOpacity={0.6}
					onPress={submitOtherReasonLeave}
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
						Other Reason Leave
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}

export default AbsenceScreen