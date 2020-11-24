import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet, ScrollView, View, Text, StatusBar,Button, Alert } from "react-native";

import {
Header,
LearnMoreLinks,
Colors,
DebugInstructions,
ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="login">
<Stack.Screen name="Arav" component={loginf} options={{ headerShown: false }} />
<Stack.Screen name="welcome" component={welcomef} />
</Stack.Navigator>
</NavigationContainer>
);
}
function myAlert({navigation}){
   // Alert.alert("message")
   navigation.navigate("welcome")
}
function loginf() {
return (
<View>
<Text> Login Screen </Text>
<Button title="jk" onPress={myAlert} />
</View>
);
}

function welcomef() {
return (
<View>
<Text> Login Screen </Text>
</View>
);
}

const styles = StyleSheet.create({
scrollView: {
backgroundColor: Colors.lighter,
},
engine: {
position: "absolute",
right: 0,
},
body: {
backgroundColor: Colors.white,
},
sectionContainer: {
marginTop: 32,
paddingHorizontal: 24,
},
sectionTitle: {
fontSize: 24,
fontWeight: "600",
color: Colors.black,
},
sectionDescription: {
marginTop: 8,
fontSize: 18,
fontWeight: "400",
color: Colors.dark,
},
highlight: {
fontWeight: "700",
},
footer: {
color: Colors.dark,
fontSize: 50,
fontWeight: "600",
padding: 4,
paddingRight: 12,
textAlign: "right",
},
});

export default App;