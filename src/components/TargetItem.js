import { Dimensions, StyleSheet, Text, View, Animated } from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

const WIDTH = Dimensions.get("window").width;

const ProgressBar = ({ step, steps, height }) => {
  const [width, setWidth] = React.useState(0);
  const animatedValue = React.useRef(new Animated.Value(-1000)).current;
  const reactive = React.useRef(new Animated.Value(-1000)).current;

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  React.useEffect(() => {
    reactive.setValue(-width + (width * step) / steps);
  }, [step, width]);

  return (
    <View
      onLayout={(e) => {
        const newWidth = e.nativeEvent.layout.width;

        setWidth(newWidth);
      }}
      style={{
        height: RFValue(10),
        backgroundColor: "#000000",
        borderRadius: height,
        overflow: "hidden",
      }}
    >
      <Animated.View
        style={{
          height: RFValue(10),
          borderRadius: height,
          backgroundColor: "#C5FBFF",
          opacity: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",

          position: "absolute",
          left: 0,
          top: 0,
          transform: [
            {
              translateX: animatedValue,
            },
          ],
        }}
      ></Animated.View>
    </View>
  );
};

export default function TargetItem() {
  return (
    <View style={styles.targetItemContainer}>
      <Text style={styles.targetText}>Target</Text>

      <Text style={styles.title}>Bellen met klant</Text>

      <Text style={styles.subtitle}>
        Van 1 mei tot en met 31 dec, dit target is 11 maanden geleden{"\n"}
        verlopen. Er mist nog 80,000 van de totale 80,000. Dit is 0%{"\n"}van
        het totaal.
      </Text>

      <View style={styles.progressBarContainer}>
        <ProgressBar step={7} steps={10} height={RFValue(14)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  targetItemContainer: {
    width: WIDTH - RFValue(20),
    backgroundColor: "#111111",
    borderRadius: 15,
    paddingTop: RFValue(12),
    paddingBottom: RFValue(20),
    paddingHorizontal: RFValue(15),
    alignSelf: "center",
    marginBottom: RFValue(10),
  },

  title: {
    color: "#fff",
    fontFamily: "Bold",
    fontSize: RFValue(15),
  },

  subtitle: {
    color: "#6D6D6D",
    fontFamily: "Regular",
    fontSize: RFValue(12),
    marginTop: RFValue(5),
    lineHeight:20,
    letterSpacing:-0.25
  },
  progressBarContainer: {
    marginTop: RFValue(15),
    width: WIDTH - RFValue(55),
  },
});
