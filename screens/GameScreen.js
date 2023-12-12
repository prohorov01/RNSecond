import { Button, Text, View, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Title from "../components/Title";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponents Guess</Title>
      <Button title="Hello" />
    </View>
  );
}
export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 12,
  },
});
