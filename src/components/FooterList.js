import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FooterItem from "./FooterItem";
import { useNavigation } from "@react-navigation/native";

export default function FooterList(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <FooterItem
          Icon={props.Icon}
          onpress={props.onpress}
          title={props.title}
          subtitle={props.subtitle}
          color={props.color}
          fillcolor={props.fillcolor}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
