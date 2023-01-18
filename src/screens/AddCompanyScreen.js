import { StyleSheet, Text, View, Pressable, Dimensions, ScrollView,TouchableOpacity, Platform } from "react-native";
import React, { useState } from "react";
import { XMarkIcon } from "react-native-heroicons/outline";
import { RFValue } from "react-native-responsive-fontsize";
import AuthInput from "../components/AuthInput";

export default function AddCompanyScreen({navigation}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setemail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  return (
    <View style={styles.container}>
        <ScrollView
        contentContainerStyle={{paddingBottom:Platform.OS==='android'?50:200}}
        showsVerticalScrollIndicator={false}
        >
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <XMarkIcon color="#fff" fill="black" size={24} />
      </Pressable>

      <View style={styles.inputsContentContainer}>
        <Text style={styles.enterEmailText}>Bedrijf toevoegen</Text>

        <Text style={styles.sentCodeText}>
        Na het invullen van jouw e-mail zal er een{"\n"}code verzonden worden.
        </Text>

        <View style={styles.searchInputMainContainer}>
          <AuthInput
            placeholder="Naam"
            value={name}
            setValue={setName}
          />
        </View>

        <View style={styles.searchInputMainContainer}>
          <AuthInput
            placeholder="Beschrijving"
            value={description}
            setValue={setDescription}
          />
        </View>

        <View style={styles.searchInputMainContainer}>
          <AuthInput
            placeholder="E-mail"
            value={email}
            setValue={setemail}
          />
        </View>

        <View style={styles.searchInputMainContainer}>
          <AuthInput
            placeholder="Telefoonnummer"
            value={phone}
            setValue={setPhone}
          />
        </View>
        <View style={styles.searchInputMainContainer}>
          <AuthInput
            placeholder="Website"
            value={website}
            setValue={setWebsite}
          />
        </View>
      </View>

      <TouchableOpacity
                  style={styles.button}
                  // onPress={()=>navigation.navigate("")}
                >
                  <Text style={styles.btnText}>Aanmaken</Text>
                </TouchableOpacity>
      </ScrollView>
                
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
    
  },
  btnText: {
    color: "#fff",
    fontFamily: "Bold",
    fontSize: RFValue(15),
  },
});
