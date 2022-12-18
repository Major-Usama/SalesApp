import { Dimensions, StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { PaperAirplaneIcon } from "react-native-heroicons/outline";
import React from "react";
import ToggleSwitch from "toggle-switch-react-native";
const WIDTH = Dimensions.get("window").width;
export default function SettingItem(props) {
  const [on, setOn] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.itemHeader}>
        <props.Icon color="#C5FBFF" fill="black" size={24} />

        <View style={{ display: props.showswitch }}>
          <ToggleSwitch
            isOn={on}
            onColor="#000000"
            offColor="#000000"
            thumbOnStyle={{ backgroundColor: "#C5FBFF" }}
            thumbOffStyle={{ backgroundColor: "#fff" }}
            size="small"
            onToggle={() => setOn(!on)}
          />
        </View>
      </View>

      <Text style={styles.title}>{props.title}</Text>

      <Text style={styles.subtitle}>{props.subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH / 2.2,
    padding: RFValue(20),
    paddingBottom: RFValue(30),
    backgroundColor: "#111111",
    borderRadius: 15,
  },
  itemHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: RFValue(15),
    fontFamily: "medium",
    color: "#fff",
    marginTop: RFValue(30),
  },
  subtitle: {
    color: "#9C9C9C",
    fontFamily: "Bold",
    fontSize: RFValue(9),
    marginTop: RFValue(14),
    letterSpacing: 1,
  },
});
