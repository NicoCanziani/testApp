import { StatusBar } from "expo-status-bar";
import { useState } from "react";
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
import CommonButton from "./src/components/CommonButton";
import ForgotPasswordButton from "./src/components/ForgotPassword";

export default function App() {
  const [enable, setEnable] = useState();
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [eye, setEye] = useState("eye");
  const [secureTextEntry, setSecureTextEntry] = useState(false);

  const handleTouchableOpacity = async () => {
    //funcion para ver contraseña apretando el ojito
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topScreen}>
        <View style={styles.secondaryTopScreen}>
          <Text style={styles.screenTitle}>Prestaciones</Text>
        </View>
      </View>
      <View style={{ flex: 0.5 }}>
        <Text style={styles.loginText}>Ingreso</Text>
        <TextInput
          value={user}
          style={styles.textInput}
          placeholder="Usuario"
          placeholderTextColor={styles.placeholderTextColor}
          keyboard="email-address"
        />
        <View style={styles.inputPassword}>
          <TextInput
            value={password}
            style={styles.textInput}
            placeholder="Clave"
            placeholderTextColor={styles.placeholderTextColor}
          />
          <TouchableOpacity onPress={handleTouchableOpacity}>
            <Ionicons name="eye" size={wp("6%")} color={"#979797"} />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: hp("5%") }}>
          <CommonButton text={"INICIAR SESIÓN"} disabled={enable} />
        </View>
        <View style={{ marginTop: hp("2%") }}>
          <ForgotPasswordButton text={"OLVIDE MI CLAVE"} />
        </View>
        <Text style={styles.linkText}>Términos y condiciones</Text>
      </View>
      <View style={styles.bottomScreen}></View>
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
  bottomScreen: {
    flex: 0.05,
    backgroundColor: "orange",
    borderTopRightRadius: hp("3%"),
    borderTopLeftRadius: hp("3%"),
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
  linkText: {
    textAlign: "center",
    marginTop: hp("2%"),
    color: "blue",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
