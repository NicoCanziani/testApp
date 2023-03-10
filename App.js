import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import CommonButton from "./src/components/CommonButton";
import ForgotPasswordButton from "./src/components/ForgotPassword";
import styles from "./styles";

export default function App() {
  const [enable, setEnable] = useState();
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [eye, setEye] = useState("eye");
  const [secureTextEntry, setSecureTextEntry] = useState(false);

  const handleTouchableOpacity = async () => {
    const eyeName = secureTextEntry ? "eye-off" : "eye";
    setSecureTextEntry(!secureTextEntry);
    setEye(eyeName);
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
            secureTextEntry={secureTextEntry}
          />
          <TouchableOpacity onPress={handleTouchableOpacity}>
            <Ionicons name={eye} size={wp("6%")} color={"#979797"} />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: hp("5%") }}>
          <CommonButton text={"INICIAR SESIÓN"} disabled={enable} />
        </View>
        <View style={{ marginTop: hp("2%") }}>
          <ForgotPasswordButton text={"OLVIDE MI CLAVE"} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <TouchableOpacity>
            <Text style={styles.linkText}>Términos y condiciones</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomScreen}>
          <Text style={styles.versionText}>Versión: 1.0</Text>
        </View>
      </View>
    </View>
  );
}
