import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import React from "react";
const WIDTH = Dimensions.get("window").width;
export default function TaskItem(props) {
  return (
    <Pressable
    onPress={props.onpress}
    style={styles.container}>
      <props.Icon color={props.color} fill="black" size={24} />

      <Text style={styles.title}>{props.title}</Text>

      <Text style={styles.subtitle}>{props.subtitle}</Text>

      <View style={{ ...styles.buttonContainer, backgroundColor: props.color }}>
        <Text style={styles.btnText}>{props.btnText}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH / 2.2,
    padding: RFValue(20),
    backgroundColor: "#111111",
    borderRadius: 15,
    marginRight: RFValue(10),
  },
  title: {
    color: "#9C9C9C",
    fontFamily: "Bold",
    fontSize: RFValue(9),
    marginTop: RFValue(20),
  },
  subtitle: {
    fontFamily: "Medium",
    fontSize: RFValue(15),
    color: "#fff",
    marginTop: RFValue(12),
  },
  buttonContainer: {
    width: RFValue(70),
    height: RFValue(24),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: RFValue(20),
  },
  btnText: {
    color: "#111111",
    fontFamily: "Bold",
    fontSize: RFValue(9),
  },
});
