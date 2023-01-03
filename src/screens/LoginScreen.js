import { StyleSheet, Text, View, Pressable, Dimensions, ScrollView,TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { XMarkIcon } from "react-native-heroicons/outline";
import { RFValue } from "react-native-responsive-fontsize";
import SearchInput from "../components/SearchInput";
import AuthInput from "../components/AuthInput";

export default function LoginScreen({navigation}) {
  const [email, setemail] = useState("");
  return (
    <View style={styles.container}>
        <ScrollView
        contentContainerStyle={{paddingBottom:50}}
        showsVerticalScrollIndicator={false}
        >
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <XMarkIcon color="#fff" fill="black" size={24} />
      </Pressable>

      <View style={styles.inputsContentContainer}>
        <Text style={styles.enterEmailText}>Vul jouw e-mail in</Text>

        <Text style={styles.sentCodeText}>
          Na het invullen van jouw e-mail zal er een{"\n"}code verzonden worden.
        </Text>

        <View style={styles.searchInputMainContainer}>
          <AuthInput
            placeholder="name@email.com"
            value={email}
            setValue={setemail}
          />
        </View>
      </View>
      </ScrollView>
                <TouchableOpacity
                  style={styles.button}
                  onPress={()=>navigation.navigate("CodeVerificationScreen")}
                >
                  <Text style={styles.btnText}>Volgende</Text>
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
    bottom:38,
  },
  btnText: {
    color: "#fff",
    fontFamily: "Bold",
    fontSize: RFValue(15),
  },
});
