import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	Button,
	TouchableOpacity,
} from "react-native";

export default function LoginScreen({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailError, setEmailError] = useState("")
	const [passwordError, setPasswordError] = useState("")

	const loginHandler = () => {
		var emailValid = false;
		if (email.length == 0) {
			setEmailError("Email is required");
		}
		else if (email.length < 6) {
			setEmailError("Email should be minimum 6 characters");
		}
		else if (email.indexOf(' ') >= 0) {
			setEmailError('Email cannot contain spaces');
		}
		else {
			setEmailError("")
			emailValid = true
		}

		var passwordValid = false;
		if (password.length == 0) {
			setPasswordError("Password is required");
		}
		else if (password.length < 6) {
			setPasswordError("Password should be minimum 6 characters");
		}
		else if (password.indexOf(' ') >= 0) {
			setPasswordError('Password cannot contain spaces');
		}
		else {
			setPasswordError("")
			passwordValid = true
		}

		if (emailValid && passwordValid) {
			// alert('Email: ' + email + '\nPassword: ' + password);
			setEmail("");
			setPassword("");
			navigation.navigate("Home")
		}
	}

	useEffect(() => {
		if (email.length != 0) {
			setEmailError("");
		}

		if (password.length != 0) {
			setPasswordError("");
		}
	}, [email, password]);

	return (
		<View style={styles.container}>
			<Image style={styles.image} source={require("../assets/profile.png")} />
			<StatusBar style="auto" />
			<View style={[styles.inputView, emailError.length > 0 && styles.inputViewError]}>
				<TextInput
					style={[styles.TextInput, emailError.length > 0 && styles.inputTextError]}
					placeholder="Email."
					placeholderTextColor="#003f5c"
					onChangeText={(email) => setEmail(email)}
				/>
				{emailError.length > 0 &&
					<Text style={styles.errorMessage}>{emailError}</Text>
				}
			</View>
			<View style={[styles.inputView, passwordError.length > 0 && styles.inputViewError]}>
				<TextInput
					style={[styles.TextInput, passwordError.length > 0 && styles.inputTextError]}
					placeholder="Password."
					placeholderTextColor="#003f5c"
					secureTextEntry={true}
					onChangeText={(password) => setPassword(password)}
				/>
				{passwordError.length > 0 &&
					<Text style={styles.errorMessage}>{passwordError}</Text>
				}
			</View>
			{/* Todo:: add screen for forgot password */}
			{/* <TouchableOpacity>
				<Text style={styles.forgot_button}>Forgot Password?</Text>
			</TouchableOpacity> */}
			<TouchableOpacity style={styles.loginBtn} onPress={() => loginHandler()}>
				<Text style={styles.loginText}>LOGIN</Text>
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		paddingLeft: 25,
		paddingRight: 25,
	},
	image: {
		marginBottom: 40,
		width: 150,
		height: 150
	},
	inputView: {
		backgroundColor: "#BED8FB",
		borderRadius: 30,
		width: "80%",
		height: 45,
		marginBottom: 20,
		alignItems: "center",
	},
	TextInput: {
		width: "100%",
		height: "100%",
		flex: 1,
		padding: 10,
		marginLeft: 20,
	},
	inputViewError: {
		borderWidth: 1,
		borderColor: "#C8180F",
		marginBottom: 25,
	},
	inputTextError: {
		color: "#C8180F",
		// placeholderTextColor: "#C8180F",
		marginBottom: 5,
	},
	forgot_button: {
		height: 30,
		marginBottom: 30,
		alignItems: "left",
	},
	loginBtn: {
		width: "80%",
		borderRadius: 25,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 40,
		backgroundColor: "#2B4D66",
	},
	loginText: {
		color: "#BED8FB"
	},
	errorMessage: {
		color: "#C8180F",
		width: "100%",
		marginLeft: 20
	}
});