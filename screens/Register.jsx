import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, KeyboardAvoidingView, View } from "react-native";

import { StatusBar } from "expo-status-bar";

// RN ELEMENTS
import { Button, Input, Text } from "react-native-elements";

// Firebase
import { auth } from "../firebase";

const Register = ({ navigation }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [imageUrl, setImageUrl] = useState("");

	useLayoutEffect(() => {
		navigation.setOptions({
			headerBackTitle: "Back to Login",
		});
	}, [navigation]);

	const register = () => {
		auth
			.createUserWithEmailAndPassword(email, password)
			.then(authUser => {
				authUser.user.updateProfile({
					displayName: name,
					photoURL:
						imageUrl ||
						"https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
				});
			})
			.catch(err => alert(err.message));
	};

	return (
		<KeyboardAvoidingView behavior="padding" style={styles.container}>
			<StatusBar style="light" />

			<Text h3 style={{ marginBottom: 50 }}>
				Create a Signal account
			</Text>

			<View style={styles.inputContainer}>
				<Input
					placeholder="Full Name"
					autoFocus
					type="test"
					value={name}
					onChangeText={text => setName(text)}
				/>
				<Input
					placeholder="Email"
					type="email"
					value={email}
					onChangeText={text => setEmail(text)}
				/>
				<Input
					placeholder="Password"
					secureTextEntry
					type="password"
					value={password}
					onChangeText={text => setPassword(text)}
				/>
				<Input
					placeholder="Profile Picture URL (optional)"
					type="text"
					value={imageUrl}
					onChangeText={text => setImageUrl(text)}
					onSubmitEditing={register}
				/>
			</View>

			<Button
				title="Register"
				containerStyle={styles.button}
				onPress={register}
				raised
			/>
			<View style={{ height: 200 }} />
		</KeyboardAvoidingView>
	);
};

export default Register;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
		padding: 10,
	},
	inputContainer: {
		width: 300,
	},
	button: {
		width: 200,
		marginTop: 10,
	},
});
