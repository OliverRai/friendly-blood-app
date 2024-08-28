import LottieView from "lottie-react-native";
import React, { useEffect, useState } from "react";
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {

  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () =>
      setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () =>
      setKeyboardVisible(false)
    );

    // Cleanup listeners on component unmount
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerLogoTitle}>
        <Text style={styles.logoTitle}>Doe sangue.</Text>
        <Text style={styles.logoTitle}>Salve vidas.</Text>
      </View>
      <View style={[styles.containerForm, isKeyboardVisible ? { height: 380} : {}]}>
        <LottieView
          source={require("../assets/animation/blood-animation.json")}
          loop
          autoPlay
          style={[styles.animation , isKeyboardVisible ? { marginBottom: 10} : {}]}
        />
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.7}
          onPress={() => {
            /* Handle login logic */
          }}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.signUp}>Sign Up</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  containerLogoTitle: {
    width: "100%",
    paddingRight: 30,
    alignItems: "flex-end",
    marginBottom: 16,
  },
  animation: {
    width: 200,
    height: 150,
  },
  containerForm: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    width: "90%",
    height: 400,
    gap: 10,
  },
  logoTitle: {
    fontWeight: "bold",
    color: "#FFF",
    fontSize: 30,
    textAlign: "justify",
  },
  input: {
    height: 35,
    width: "90%",
    borderColor: "gray",
    borderRadius: 7,
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  loginButton: {
    backgroundColor: "#8B0000",
    height: 35,
    width: "90%",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  signUp: {
    paddingTop: 20,
    color: "gray",
  },
});
