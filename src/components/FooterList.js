import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FooterItem from "./FooterItem";
import {
  DocumentDuplicateIcon,
  ChartPieIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';

export default function FooterList() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <FooterItem
          Icon={DocumentDuplicateIcon}
          onpress={()=>navigation.navigate('ReportsScreen')}
          title="Rapporten"
          subtitle="Bekijk alle rapporten."
          color="#6D6D6D"
          fillcolor="#000000"
        />
        <FooterItem
          Icon={ChartPieIcon}
          title="Targets"
          subtitle="Bekijk uw 5 targets."
          color="#6D6D6D"
          fillcolor="#000000
          "
        />
        <FooterItem
          Icon={AdjustmentsVerticalIcon}
          title="Instellingen"
          subtitle="Pas uw instellingen hier aan."
          color="#6D6D6D"
          fillcolor="#6D6D6D"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
