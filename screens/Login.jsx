import React, { useState, useEffect } from "react";
import { StyleSheet, KeyboardAvoidingView, View } from "react-native";

import { StatusBar } from "expo-status-bar";

// RN ELEMENTS
import { Button, Input, Image } from "react-native-elements";

// FIREBASE
import { auth } from "../firebase";

const Login = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(authUser => {
			console.log("====================================");
			console.log(authUser);
			console.log("====================================");
			if (authUser) {
				navigation.replace("Home");
			}
		});

		return unsubscribe;
	}, []);

	const signIn = () => {
		auth.signInWithEmailAndPassword(email, password).catch(err => alert(err));
	};

	return (
		<KeyboardAvoidingView behavior="padding" style={styles.container}>
			<StatusBar style="light" />

			<Image
				source={{
					uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
				}}
				style={{ height: 200, width: 200 }}
			/>

			<View style={styles.inputContainer}>
				<Input
					placeholder="Email"
					autoFocus
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
					onSubmitEditing={signIn}
				/>
			</View>

			<Button title="Login" containerStyle={styles.button} onPress={signIn} />
			<Button
				title="Register"
				type="outline"
				containerStyle={styles.button}
				onPress={() => navigation.navigate("Register")}
			/>
			<View style={{ height: 100 }} />
		</KeyboardAvoidingView>
	);
};

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
	},
	inputContainer: {
		width: 300,
	},
	button: {
		width: 200,
		marginTop: 10,
	},
});
