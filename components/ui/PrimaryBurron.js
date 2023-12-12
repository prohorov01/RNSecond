import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../utils/colors";

function PrimaryBurron({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryBurron;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 8,
    borderRadius: 28,
    overflow: "hidden",
  },

  buttonInnerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: Colors.primary500,

    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  buttonText: {
    color: "#ddb52f",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
