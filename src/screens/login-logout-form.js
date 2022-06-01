import React from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'

const LoginLogoutFormScreen = ({navigation, route}) => {
	navigation.setOptions({
		title: route.params.title
	})

	const { width } = useWindowDimensions()

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
					padding: 20
				}}
				style = {{
					flex: 1
				}}
			>
				<TouchableOpacity
					style = {{
						alignSelf: 'center',
						borderRadius: 20,
						overflow: 'hidden'
					}}
				>
					<Image
						style = {{
							backgroundColor: 'dimgray',
							height: 120,
							width: 120
						}}
					/>

					<View
						style = {{
							position: 'absolute',
							top: 0,
							right: 0,
							left: 0,
							bottom: 0,
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<Text
							style = {{
								color: 'white',
								fontSize: 32,
								fontWeight: 'bold',
								marginTop: -10
							}}
						>
							+
						</Text>

						<Text
							style = {{
								color: 'white',
								fontWeight: 'bold'
							}}
						>
							Add Photo
						</Text>
					</View>
				</TouchableOpacity>

				<View
					style = {{
						backgroundColor: 'orangered',
						borderRadius: 15,
						height: (width - 40) / 16 * 9,
						marginTop: 20,
						width: width - 40,
					}}
				/>

				<View
					style = {{
						flex: 1
					}}
				/>

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
						Submit
					</Text>
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	)
}

export default LoginLogoutFormScreen