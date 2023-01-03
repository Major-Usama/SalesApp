import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { RFValue } from "react-native-responsive-fontsize";
import AuthInput from "../components/AuthInput";

export default function CodeVerificationScreen({ navigation }) {
  const [code, setCode] = useState("");
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon color="#fff" fill="black" size={24} />
        </Pressable>

        <View style={styles.inputsContentContainer}>
          <Text style={styles.enterEmailText}>Vul code in</Text>

          <Text style={styles.sentCodeText}>
            Er is een code verzonden naar jouw e-{"\n"}mail, vul deze hier in.
          </Text>

          <View style={styles.searchInputMainContainer}>
            <AuthInput
              keyboardtype="phone-pad"
              placeholder="lore-urem-doim"
              value={code}
              setValue={setCode}
            />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={styles.btnText}>Inloggen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  backButton: {
    width: 60,
    height: 60,
    backgroundColor: "#111111",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: RFValue(40),
    marginLeft: RFValue(35),
  },
  enterEmailText: {
    fontSize: RFValue(30),
    color: "#fff",
    fontFamily: "Medium",
    marginLeft: RFValue(28),
  },
  sentCodeText: {
    color: "#6D6D6D",
    fontSize: RFValue(15),
    fontFamily: "Regular",
    marginTop: 5,
    marginLeft: RFValue(28),
  },
  searchInputMainContainer: {
    marginTop: RFValue(18),
    alignSelf: "center",
  },
  inputsContentContainer: {
    marginTop: RFValue(28),
  },
  button: {
    width: RFValue(170),
    height: RFValue(55),
    backgroundColor: "#111111",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: Dimensions.get("window").height / 10,
    bottom: 38,
  },
  btnText: {
    color: "#fff",
    fontFamily: "Bold",
    fontSize: RFValue(15),
  },
});
