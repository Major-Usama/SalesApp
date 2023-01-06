import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DetailBox from "./DetailBox";

export default function DetailFooter() {
  return (
    <View style={styles.footerComponentContainer}>
      <View style={styles.footerInnerContainer}>
        <View style={styles.firstrow}>
          <DetailBox
            header="TAAK"
            title="Bellen met Jan"
            description={`Corrupti perferendis${"\n"}debitis voluptas veritatis${"\n"}expedita magni...`}
            footer="Vandaag"
            showfooter="flex"
            showdesc="flex"
          />
          <DetailBox
            header="BIJLAGE"
            title="Bellen met Jan"
            description={`Corrupti perferendis${"\n"}debitis voluptas veritatis${"\n"}expedita magni...`}
            footer="Vandaag"
            showdesc="flex"
            showfooter="flex"
          />
          <DetailBox
            header="RAPPORT"
            title="Rapporteren"
            description={`Corrupti perferendis${"\n"}debitis voluptas veritatis${"\n"}expedita magni...`}
            footer="Een dag geleden"
            showdesc="none"
            showfooter="flex"
          />
        </View>

        <View style={styles.firstrow}>
          <DetailBox
            header="RAPPORT"
            title="Rapporteren"
            description={`Corrupti perferendis${"\n"}debitis voluptas veritatis${"\n"}expedita magni...`}
            footer="Een dag geleden"
            showdesc="none"
            showfooter="flex"
          />
          <DetailBox
            header="TAAK"
            title="Bellen met Jan"
            description={`Corrupti perferendis${"\n"}debitis voluptas veritatis${"\n"}expedita magni...`}
            footer="Vandaag"
            showfooter="flex"
            showdesc="flex"
          />
          <DetailBox
            header="BIJLAGE"
            title="GDPR Document"
            description={`Corrupti perferendis${"\n"}debitis voluptas veritatis${"\n"}expedita magni...`}
            footer="Vandaag"
            showdesc="flex"
            showfooter="none"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  firstrow: {
    // flexDirection:'row',
    // justifyContent:'space-evenly'
  },
  footerInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  footerComponentContainer: {
    marginTop: 4,
  },
});
