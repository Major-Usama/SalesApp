import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import DetailBox from "./DetailBox";
import { RFValue } from "react-native-responsive-fontsize";

export default function DetailFooter() {
  const DATA = [
    {
      id: "1",
      header: "TAAK",
      title: "Bellen met Jan",
      description: `Corrupti perferendis${"\n"}debitis voluptas veritatis expedita magni...`,
      footer: "Vandaag",
      showfooter: "flex",
      showdesc: "flex",
    },
    {
      id: "2",
      header: "RAPPORT",
      title: "Rapporteren",
      description: `Corrupti poluptas veritatis expedita magni...`,
      footer: "Een dag geleden",
      showfooter: "flex",
      showdesc: "none",
    },
    {
      id: "3",
      header: "BIJLAGE",
      title: "GDPR Document",
      description: `Corrupti perferendis${"\n"}debitis voluptas veritatis expedita magni...`,
      footer: "Vandaag",
      showfooter: "none",
      showdesc: "flex",
    },
    {
      id: "4",
      header: "TAAK",
      title: "Bellen met Jan",
      description: `Corrupti perferendis${"\n"}debitis voluptas veritatis expedita magni...`,
      footer: "Vandaag",
      showfooter: "flex",
      showdesc: "flex",
    },
    {
      id: "5",
      header: "RAPPORT",
      title: "Rapporteren",
      description: `Corrupti perferendis${"\n"}debitis voluptas veritatis expedita magni...`,
      footer: "Een dag geleden",
      showfooter: "flex",
      showdesc: "none",
    },
    {
      id: "6",
      header: "BIJLAGE",
      title: "GDPR Document",
      description: `Corrupti perferendis${"\n"}debitis voluptas veritatis expedita magni...`,
      footer: "Vandaag",
      showfooter: "none",
      showdesc: "flex",
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <DetailBox
        header={item.header}
        title={item.title}
        description={item.description}
        footer={item.footer}
        showfooter={item.showfooter}
        showdesc={item.showdesc}
      />
    );
  };
  return (
    <View style={styles.footerComponentContainer}>
      <View>
        <FlatList
          numColumns={2}
          contentContainerStyle={{
            marginTop: RFValue(20),
            alignSelf: "center",
          }}
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      {/* <View style={styles.footerInnerContainer}>
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
      </View> */}
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
