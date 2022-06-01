import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'

import MapView, {Marker} from 'react-native-maps'
import ImagePicker from 'react-native-image-crop-picker'

const LoginLogoutFormScreen = ({navigation, route}) => {
	const [photo, setPhoto] = useState(null)

	navigation.setOptions({
		title: route.params.title
	})

	const { width } = useWindowDimensions()

	const pickImage = async() => {
		const res = await ImagePicker.openCamera({
			useFrontCamera: true,
			cropping: false,
			maxFiles: 1
		})

		if (res) {
			const { mime, path, filename } = res
			
			setPhoto({
				mime,
				path,
				filename
			})
		}
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
					padding: 20
				}}
				style = {{
					flex: 1
				}}
			>
				<TouchableOpacity
					onPress={pickImage}
					style = {{
						alignSelf: 'center',
						borderRadius: 20,
						overflow: 'hidden',
						borderWidth: 5,
						borderColor: 'white'
					}}
				>
					<Image
						source={{uri: photo?.path}}
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
							{photo ? 'Change' : 'Add'} Photo
						</Text>
					</View>
				</TouchableOpacity>

				<View
					style = {{
						borderRadius: 20,
						marginTop: 20,
						borderWidth: 5,
						borderColor: 'white',
						overflow: 'hidden'
					}}
				>
					<MapView
						region={{
							latitude: -6.966667,
							longitude: 110.416664,
							latitudeDelta: 0.005,
							longitudeDelta: 0.005,
						}}
						key='AIzaSyC5v_sIm0x21CHdIJVAL_03UR3GHulyG1Y'
						style = {{
							height: (width - 40) / 16 * 9,
							width: width - 40,
						}}
					>
						<Marker
							coordinate={{
								latitude: -6.966667,
								longitude: 110.416664,
							}}
						/>
					</MapView>
				</View>

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