
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import { useFonts } from "expo-font";
import { LogBox } from 'react-native';
import Navigation from './src/navigation/navigation';

export default function App() {
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();

  const [loaded] = useFonts({
    Bold:require("./src/assets/fonts/SFProDisplay-Bold.ttf"),
    SemiBold:require("./src/assets/fonts/SFProDisplay-Semibold.ttf"),
    Medium:require("./src/assets/fonts/SFProDisplay-Medium.ttf"),
    Regular:require("./src/assets/fonts/SFProDisplay-Regular.ttf"),
 });
 if (!loaded) {
   return false;
 }
 const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 40 : StatusBar.currentHeight;
  return(

    <View style={{flex:1,}}>
 <View style={{ height: STATUS_BAR_HEIGHT, backgroundColor: "#000" }}>
          <StatusBar
            translucent
            backgroundColor="#000"
            barStyle="light-content"
          />
        </View>
      <Navigation />
    </View>
  )
}
