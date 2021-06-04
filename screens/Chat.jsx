import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { TouchableOpacity } from "react-native";

// ICONS
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";

const Chat = ({ navigation, route }) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			title: "Chat",
			headerBackTitleVisible: false,
			headerTitleAlign: "left",
			headerTitle: () => (
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
					}}
				>
					<Avatar
						rounded
						source={{
							uri: "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
						}}
					/>
					<Text style={{ color: "white", marginLeft: 10, fontWeight: "700" }}>
						{route.params.chatName}
					</Text>
				</View>
			),
			headerLeft: () => (
				<TouchableOpacity
					style={{ marginLeft: 10 }}
					onPress={navigation.goBack}
				>
					<AntDesign name="arrowleft" size={24} color="white" />
				</TouchableOpacity>
			),
			headerRight: () => (
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						width: 80,
						marginRight: 20,
					}}
				>
					<TouchableOpacity
						style={{ marginLeft: 10 }}
						onPress={navigation.goBack}
					>
						<FontAwesome name="video-camera" size={24} color="white" />
					</TouchableOpacity>
					<TouchableOpacity
						style={{ marginLeft: 10 }}
						onPress={navigation.goBack}
					>
						<Ionicons name="call" size={24} color="white" />
					</TouchableOpacity>
				</View>
			),
		});
	}, [navigation]);
	return (
		<View>
			<Text>{route.params.chatName}</Text>
		</View>
	);
};

export default Chat;

const styles = StyleSheet.create({});
