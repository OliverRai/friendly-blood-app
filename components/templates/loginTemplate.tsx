import { SafeAreaView, StyleSheet, Text, View } from "react-native";

interface LoginTemplateProps {
  children: React.ReactNode;
}

export default function LoginTemplate({ children }: LoginTemplateProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerLogoTitle}>
        <Text style={styles.logoTitle}>Doe sangue.</Text>
        <Text style={styles.logoTitle}>Salve vidas.</Text>
      </View>
      {children}
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
  logoTitle: {
    fontWeight: "bold",
    color: "#FFF",
    fontSize: 30,
    textAlign: "justify",
  },
});
