import React, { useLayoutEffect, useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";

// ICONS
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

// RN ELEMENTS
import { Avatar } from "react-native-elements";

// COMPONENTS
import CustomListItem from "../components/CustomListItem";

// FIREBASE
import { auth, db } from "../firebase";

const Home = ({ navigation }) => {
	const [chats, setChats] = useState([]);

	useEffect(() => {
		const unsub = db.collection("chats").onSnapshot(snapshot => {
			setChats(
				snapshot.docs.map(doc => ({
					id: doc.id,
					data: doc.data(),
				})),
			);
		});

		return unsub;
	}, []);

	const signOut = () => {
		auth.signOut().then(() => {
			navigation.replace("Login");
		});
	};
	useLayoutEffect(() => {
		navigation.setOptions({
			title: "Signal",
			headerStyle: { backgroundColor: "#fff" },
			headerTitleStyle: { color: "black" },
			headerTintColor: "black",
			headerLeft: () => (
				<View style={{ marginLeft: 20 }}>
					<TouchableOpacity activeOpacity={0.5} onPress={signOut}>
						<Avatar
							rounded
							source={{
								uri:
									auth?.currentUser?.photoURL ??
									"https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
							}}
						/>
					</TouchableOpacity>
				</View>
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
					<TouchableOpacity activeOpacity={0.5}>
						<AntDesign name="camerao" size={24} color="black" />
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={0.5}>
						<SimpleLineIcons
							name="pencil"
							size={24}
							color="black"
							onPress={() => navigation.navigate("AddChat")}
						/>
					</TouchableOpacity>
				</View>
			),
		});
	}, [navigation]);

	const enterChat = (id, chatName) => {
		navigation.navigate("Chat", {
			id,
			chatName,
		});
	};

	return (
		<SafeAreaView>
			<ScrollView style={styles.container}>
				{chats.map(({ id, data: { chatName } }) => (
					<CustomListItem
						key={id}
						chatName={chatName}
						id={id}
						enterChat={enterChat}
					/>
				))}
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		height: "100%",
	},
});
