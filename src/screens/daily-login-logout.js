import React from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'

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

const DailyLoginLogoutScreen = () => {
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