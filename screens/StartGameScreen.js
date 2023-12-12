import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryBurron from "../components/ui/PrimaryBurron";
import Colors from "../utils/colors";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(entereText) {
    setEnteredNumber(entereText);
  }
  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirnInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99 ",
        [{ text: "Okay", style: "destructive", onPress: setEnteredNumber }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryBurron onPress={resetInputHandler}>Reset</PrimaryBurron>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryBurron onPress={confirnInputHandler}>Confirm </PrimaryBurron>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginHorizontal: 24,
    marginTop: 100,
    padding: 16,
    backgroundColor: Colors.primary500,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: "bold",
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
