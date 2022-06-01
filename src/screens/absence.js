import React from 'react'
import { Alert, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

const AbsenceScreen = ({navigation}) => {
	const submitSickLeave = () => {
		Alert.alert(
			'Sick Leave?',
			'Are you sure want to take a sick leave today?',
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

	const submitAnnualLeave = () => {
		Alert.alert(
			'Annual Leave?',
			'Are you sure want to take an annual leave allowance today?',
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