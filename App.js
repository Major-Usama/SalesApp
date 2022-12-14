
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
  return(

    <View style={{flex:1,}}>
<StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#000" />
      <Navigation />
    </View>
  )
}
