import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
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
        flex: 1,
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
        marginTop: hp("4%"),
        color: "blue",
        fontWeight: "bold",
        textDecorationLine: "underline",
      },
      versionText: {
        color: "white",
        textAlign: "center",
        alignItems: "baseline",
      },
    
});