import { useKeyboardContext } from "@/context/KeyboardContext";
import LottieView from "lottie-react-native";
import { StyleSheet } from "react-native";

export default function LottieBlood() {

  const { isKeyboardVisible } = useKeyboardContext();
  
  return (
    <LottieView
      source={require("../../assets/animation/blood-animation.json")}
      loop
      autoPlay
      style={[
        styles.animation,
        isKeyboardVisible ? { marginBottom: 10 } : {},
      ]}
    />
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 200,
    height: 150,
  },
});