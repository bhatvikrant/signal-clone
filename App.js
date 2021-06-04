import "react-native-gesture-handler";

import React from "react";
import { StyleSheet, Text, View } from "react-native";

// REACT NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// SCREENS
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";
import AddChat from "./screens/AddChat";

const Stack = createStackNavigator();

const globalScreenOptions = {
	headerStyle: { backgroundColor: "#2C6BED" },
	headerTitleStyle: { color: "white" },
	headerTintColor: "white",
};

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={globalScreenOptions}
				// initialRouteName="Home"
			>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Register" component={Register} />
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="AddChat" component={AddChat} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
