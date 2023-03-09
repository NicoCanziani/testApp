import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function CommonButton({ disabled, onPressHandler, text }) {
  return (
    <TouchableOpacity
      style={disabled ? styles.buttonDisabled : styles.button}
      onPress={onPressHandler}
      disabled={disabled}
    >
      <View style={styles.commonButton}>
        <Text style={disabled ? styles.disabledButtonText : styles.buttonText}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  commonButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignSelf: "center",
    height: hp("6%"),
    width: wp("80%"),
    backgroundColor: "#593794",
    borderRadius: 7,
    shadowColor: "#000",
    shadowOffset: {
      height: 5,
      width: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonDisabled: {
    alignSelf: "center",
    height: hp("6%"),
    width: wp("80%"),
    backgroundColor: "#593794",
    borderRadius: 7,
    opacity: 0.5,
  },
  buttonText: {
    color: "white",
    letterSpacing: 0.9,
  },
  disabledButtonText: {
    color: "white",
    letterSpacing: 0.9,
  },
});
