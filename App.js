import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topScreen}>
        <View style={styles.secondaryTopScreen}>
          <Text style={styles.screenTitle}>Prestaciones</Text>
        </View>
      </View>
      <View style={{ flex: 0.5 }}>
        <Text style={styles.loginText}>Ingreso xdddd</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Usuario"
          placeholderTextColor={styles.placeholderTextColor}
          keyboard="email-address"
        />
        <View style={styles.inputPassword}>
          <TextInput
            style={styles.textInput}
            placeholder="Clave"
            placeholderTextColor={styles.placeholderTextColor}
            secureTextEntry={true}
          />
          <TouchableOpacity>
            <Ionicons name='eye' size={wp("6%")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topScreen: {
    flex: 0.5,
    backgroundColor: "orange",
    borderBottomRightRadius: hp("3%"),
    borderBottomLeftRadius: hp("3%"),
  },
  secondaryTopScreen: {
    marginTop: hp("30%"),
    alignSelf: "center",
  },
  screenTitle: {
    color: "white",
    fontSize: hp("3%"),
    fontWeight: "500",
  },
  loginText: {
    fontSize: hp("2.5%"),
    fontWeight: "500",
    alignSelf: "center",
    marginTop: hp("3%"),
  },
  textInput: {
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
    alignSelf: "center",
    width: wp("90%"),
    height: hp("6%"),
    marginTop: hp("3%"),
  },
  placeholderTextColor: {
    color: "rgba(0, 0, 0,0.38)",
  },
  inputPassword: {
    paddingHorizontal: wp("10%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
