import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

const WIDTH = Dimensions.get("window").width;
export default function ReportItem(props) {
  return (
    <View style={styles.container}>
      <View style={styles.itemHeader}>
        <props.Icon color={props.color} fill="black" size={24} />
        <View
          style={{ ...styles.buttonContainer, backgroundColor: props.color }}
        >
          <Text style={styles.btnText}>{props.btnText}</Text>
        </View>
      </View>
       
       <View style={styles.itemFooter}>
        
        <View >
        <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.subtitle}>{props.subtitle}</Text>
        </View>

        <View>
        <Text style={styles.title}>{props.latestcontact}</Text>
      <Text style={styles.subtitle}>{props.weekagotext}</Text>
        </View>


       </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH - RFValue(20),
    paddingLeft: RFValue(24),
    paddingRight: RFValue(20),
    paddingVertical: RFValue(22),
    backgroundColor: "#111111",
    alignSelf: "center",
    borderRadius: 15,
    marginBottom:RFValue(10)
  },
  buttonContainer: {
    width: RFValue(70),
    height: RFValue(24),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  itemHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btnText: {
    color: "#111111",
    fontFamily: "Bold",
    fontSize: RFValue(9),
  },
  title: {
    color: "#9C9C9C",
    fontFamily: "Bold",
    fontSize: RFValue(9),

    letterSpacing:1,
  },
  subtitle: {
    fontFamily: "Medium",
    fontSize: RFValue(15),
    color: "#fff",
    marginTop:RFValue(5)
   
  },
  itemFooter:
  {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"space-between",
    marginTop:RFValue(18)
  }
});
