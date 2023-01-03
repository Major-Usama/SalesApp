import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import { RFValue } from "react-native-responsive-fontsize";
  
  export default function Onboard3(props) {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Image
            style={styles.onboardimage}
            source={require("../assets/images/onboard3.png")}
          />
  
          <Text style={styles.title}>Beginnen</Text>
          <Text style={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur{"\n"}adipiscing elit, sed do
            eiusmod tempor{"\n"}incididunt ut labore et dolore magna.
          </Text>
        </View>
  
        <View>
          {props.page === 3 && (
            <View>
              <TouchableOpacity
                style={styles.button}
                // onPress={props.handleNextPress}
              >
                <Text style={styles.btnText}>Inloggen</Text>
              </TouchableOpacity>
  
              <Text onPress={props.handleBackPress} style={styles.back}>
                back
              </Text>
            </View>
          )}
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      backgroundColor: "#000000",
    },
    onboardimage: {
      width: 306,
      height: 184,
      resizeMode:'contain',
      alignSelf: "center",
    },
    title: {
      fontSize: RFValue(38),
      color: "#fff",
      fontFamily: "Medium",
      textAlign: "center",
      marginTop: RFValue(50),
    },
    subtitle: {
      fontSize: RFValue(14),
      color: "#9C9C9C",
      fontFamily: "Medium",
      textAlign: "center",
      marginTop: RFValue(25),
    },
    contentContainer: {
      marginTop: Dimensions.get("window").height / 5,
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
    back: {
      fontSize: RFValue(14),
      color: "#fff",
      fontFamily: "Medium",
      alignSelf: "center",
      marginTop: 14,
      textDecorationLine: "underline",
    },
  });
  