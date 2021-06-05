import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";

import { ListItem, Avatar } from "react-native-elements";
import { db } from "../firebase";

const CustomListItem = ({ id, chatName, enterChat }) => {
	const [chatmessages, setChatMessages] = useState([]);

	useEffect(() => {
		const unsub = db
			.collection("chats")
			.doc(id)
			.collection("messages")
			.orderBy("timestamp", "desc")
			.onSnapshot(snapshot =>
				setChatMessages(snapshot.docs.map(doc => doc.data())),
			);

		return unsub;
	}, []);

	return (
		<ListItem key={id} onPress={() => enterChat(id, chatName)}>
			<Avatar
				rounded
				source={{
					uri:
						chatmessages?.[0]?.photoURL ||
						"https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
				}}
			/>
			<ListItem.Content>
				<ListItem.Title style={{ fontWeight: "800" }}>
					{chatName}
				</ListItem.Title>
				<ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
					{chatmessages?.[0]?.displayName}
					{chatmessages.length > 0 && ":"} {chatmessages?.[0]?.message}
				</ListItem.Subtitle>
			</ListItem.Content>
		</ListItem>
	);
};

export default CustomListItem;

const styles = StyleSheet.create({});
