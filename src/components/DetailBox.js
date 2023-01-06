import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
const WIDTH = Dimensions.get("window").width;

export default function DetailBox(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{props.header}</Text>

      <Text style={styles.title}>{props.title}</Text>

      <View style={{ display: props.showdesc }}>
        <Text style={{ ...styles.description }}>{props.description}</Text>
      </View>

      <Text style={{ ...styles.footerText, display: props.showfooter }}>
        {props.footer}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH / 2.1,
    paddingVertical: RFValue(15),
    paddingLeft: 10,
    backgroundColor: "#111111",
    borderRadius: 15,
    marginTop: 4,
  },
  headerText: {
    fontSize: RFValue(9),
    fontFamily: "Bold",
    color: "#9C9C9C",
  },
  title: {
    fontSize: RFValue(18),
    color: "#fff",
    fontFamily: "SemiBold",
    marginTop: RFValue(8),
  },
  description: {
    marginTop: RFValue(7),
    fontSize: RFValue(14),
    color: "#C3C3C3",
    fontFamily: "Medium",
  },
  footerText: {
    color: "#C4FBFF",
    fontSize: RFValue(14),
    fontFamily: "SemiBold",
  },
});
