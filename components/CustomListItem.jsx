import React from "react";
import { StyleSheet } from "react-native";

import { ListItem, Avatar } from "react-native-elements";

const CustomListItem = ({ id, chatName, enterChat }) => {
	return (
		<ListItem>
			<Avatar
				rounded
				source={{
					uri: "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
				}}
			/>
			<ListItem.Content>
				<ListItem.Title style={{ fontWeight: "800" }}>Yt chat</ListItem.Title>
				<ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione unde
					accusantium eligendi illo, facere labore maxime temporibus ipsum sunt
					accusamus, maiores quidem quasi reprehenderit quis dolor aliquam
					perferendis, recusandae quam.
				</ListItem.Subtitle>
			</ListItem.Content>
		</ListItem>
	);
};

export default CustomListItem;

const styles = StyleSheet.create({});
