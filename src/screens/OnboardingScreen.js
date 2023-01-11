import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Swiper from "react-native-swiper";
import { RFValue } from "react-native-responsive-fontsize";

const OnboardingScreen = ({navigation}) => {
  const [page, setPage] = useState(1);

  const handleNextPress = () => {
    setPage(page + 1);
  };

  const handleBackPress = () => {
    setPage(page - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.indicatorsContainer}>
        <View
          style={page === 1 ? styles.indicatorActive : styles.indicatorInactive}
        />
        <View
          style={page === 2 ? styles.indicatorActive : styles.indicatorInactive}
        />
        <View
          style={page === 3 ? styles.indicatorActive : styles.indicatorInactive}
        />
      </View>
      <Swiper
        loop={false}
        showsPagination={false}
        index={page - 1}
        onIndexChanged={(index) => setPage(index + 1)}
      >
        <View style={styles.page}>
          <View style={styles.contentContainer}>
            <Image
              style={styles.onboardimage}
              source={require("../assets/images/onboard1.png")}
            />

            <Text style={styles.title}>Ontdekken</Text>
            <Text style={styles.subtitle}>
              Lorem ipsum dolor sit amet, consectetur{"\n"}adipiscing elit, sed
              do eiusmod tempor{"\n"}incididunt ut labore et dolore magna.
            </Text>
          </View>

          {/* <View>
            {page === 1 && (
              <Pressable
                style={styles.button}
                // onPress={handleNextPress}
              >
                <Text style={styles.btnText}>Volgende</Text>
              </Pressable>
            )}
          </View> */}
        </View>
        <View style={styles.page}>
          <View style={styles.contentContainer}>
            <Image
              style={styles.onboardimage}
              source={require("../assets/images/onboard2.png")}
            />

            <Text style={styles.title}>Besparen</Text>
            <Text style={styles.subtitle}>
              Lorem ipsum dolor sit amet, consectetur{"\n"}adipiscing elit, sed
              do eiusmod tempor{"\n"}incididunt ut labore et dolore magna.
            </Text>
          </View>

          {/* <View>
            {page === 2 && (
              <View>
                <Pressable
                  style={styles.button}
                  // onPress={handleNextPress}
                >
                  <Text style={styles.btnText}>Volgende</Text>
                </Pressable>
              </View>
            )}
          </View> */}
        </View>
        <View style={styles.page}>
          <View style={styles.contentContainer}>
            <Image
              style={styles.onboardimage}
              source={require("../assets/images/onboard3.png")}
            />

            <Text style={styles.title}>Beginnen</Text>
            <Text style={styles.subtitle}>
              Lorem ipsum dolor sit amet, consectetur{"\n"}adipiscing elit, sed
              do eiusmod tempor{"\n"}incididunt ut labore et dolore magna.
            </Text>
          </View>

          <View>
            {page === 3 && (
              <View>
                <TouchableOpacity
                onPress={()=>navigation.navigate('LoginScreen')}
                  style={styles.button}
                  // onPress={props.handleNextPress}
                >
                  <Text style={styles.btnText}>Inloggen</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </Swiper>
      {/* <View style={styles.indicatorsContainer}>
        <View style={page === 1 ? styles.indicatorActive : styles.indicatorInactive} />
        <View style={page === 2 ? styles.indicatorActive : styles.indicatorInactive} />
        <View style={page === 3 ? styles.indicatorActive : styles.indicatorInactive} />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    backgroundColor: "#000",
  },
  indicatorsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    position: "absolute",
    zIndex: 9999,
    top: RFValue(50),
  },
  indicatorActive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#C5FBFF",
    marginHorizontal: 3,
  },
  indicatorInactive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#1D1D1E",
    marginHorizontal: 3,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  onboardimage: {
    width: 180,
    height: 180,
    alignSelf: "center",
    resizeMode: "contain",
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
    marginTop: Dimensions.get("window").height / 4,
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
});

export default OnboardingScreen;

//  import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';
// import { RFValue } from 'react-native-responsive-fontsize';
// import Onboard1 from '../components/Onboard1';
// import Onboard2 from '../components/Onboard2';
// import Onboard3 from '../components/Onboard3';
// import Swiper from 'react-native-swiper';

// const OnboardingScreen = () => {
//   const [page, setPage] = useState(1);

//   const handleNextPress = () => {
//     setPage(page + 1);
//   };

//   const handleBackPress = () => {
//     setPage(page - 1);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.dotsContainer}>
//         <View style={page === 1 ? styles.dotActive : styles.dotInactive} />

//         <View style={page === 2 ? styles.dotActive : styles.dotInactive} />
//         <View style={page === 3 ? styles.dotActive : styles.dotInactive} />
//       </View>
//       {page === 1 && (
//         <View>
//         <Onboard1
//         page={page}
//         handleNextPress={handleNextPress}

//         />
//         </View>
//       )}
//       {page === 2 && (
//        <View>
//         <Onboard2
//         page={page}
//         handleNextPress={handleNextPress}
//         handleBackPress={handleBackPress}
//         />
//        </View>
//       )}
//       {page === 3 && (
//          <Onboard3
//          page={page}
//          handleBackPress={handleBackPress}
//          />
//       )}

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor:'#000'

//   },
//   dotsContainer: {
//     flexDirection: 'row',
//     alignSelf: 'center',
//     position:'absolute',
//     zIndex:9999,
//     top:RFValue(50)
//   },
//   dotActive: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: '#C5FBFF',
//     marginHorizontal: 3,
//   },
//   dotInactive: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: '#1D1D1E',
//     marginHorizontal: 3,
//   },
// });

// export default OnboardingScreen;
