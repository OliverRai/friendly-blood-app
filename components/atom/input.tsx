import { StyleSheet, Text, TextInput, View } from "react-native";

interface InputProps extends React.ComponentProps<typeof TextInput> {
  error?: string;
}

export default function Input({ error, ...props }: InputProps) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...props} />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  input: {
    height: 35,
    width: "90%",
    borderColor: "gray",
    borderRadius: 7,
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  error: {
    color: "red",
    fontSize: 12,
    fontWeight: "bold",
    alignSelf: "flex-end",
    marginHorizontal: 20,
    marginVertical: 0,
    position: "absolute",
    bottom: -17,
    right: 5,
  },
});
