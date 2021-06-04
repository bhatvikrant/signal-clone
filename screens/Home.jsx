import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import CustomListItem from "../components/CustomListItem";

const Home = () => {
	return (
		<SafeAreaView>
			<ScrollView>
				<CustomListItem />
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({});
