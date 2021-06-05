import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

// RN ELEMENTS
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

// FIREBASE
import { db } from "../firebase";

const AddChat = ({ navigation }) => {
	const [input, setInput] = useState("");

	useLayoutEffect(() => {
		navigation.setOptions({
			title: "Add new chat",
			headerBackTitle: "Chats",
		});
	}, [navigation]);

	const createChat = async () => {
		await db
			.collection("chats")
			.add({
				chatName: input,
			})
			.then(() => {
				navigation.goBack();
			})
			.catch(err => alert(err));
	};

	return (
		<View style={styles.container}>
			<Input
				autoFocus
				placeholder="Enter a chat name"
				value={input}
				onChangeText={text => setInput(text)}
				leftIcon={
					<Icon name="wechat" type="antdesign" size={24} color="black" />
				}
				onSubmitEditing={createChat}
			/>
			<Button disabled={!input} title="Create new chat" onPress={createChat} />
		</View>
	);
};

export default AddChat;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		padding: 30,
		height: "100%",
	},
});
