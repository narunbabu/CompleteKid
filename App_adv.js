import 'react-native-gesture-handler';
import * as React  from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { FAB } from 'react-native-paper';
import { Animated, Text, View, StyleSheet, Button, SafeAreaView } from "react-native";
// import { MathApp} from './maths/components/MathApp';
// import { styles} from './maths/components/Styles'
// import { AsyncComponent } from './AsyncComponent';
// import {MySurface} from './maths/components/MySurface'
// import { ArithOpsScreen } from './maths/components/ArithOpsScreen';
// import {UserScreen} from './maths/components/UserScreen'
import {MyWelcomeScreen} from './maths/components/MyWelcomeScreen'
// import {DynamicAdd} from './maths/components/DynamicAdd'
// import {AsyncApp} from './AsyncComponent'
// impoert {AsyncComponent}
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AsyncStorage } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
const Stack = createStackNavigator();


const ProfileScreen = ({ navigation, route }) => {
  return (
    <>
    return <Text>This is {route.params.name}'s profile</Text>;
    </>
  )
}

const StartScreen = ({ navigation, route }) => {
  return <MyWelcomeScreen />  
}

const NavApp = () => {
  // return <AsyncComponent />
return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={LevelScreen}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />

      <Stack.Screen name="MathScreen" component={MathScreen} />
      
    </Stack.Navigator>
  </NavigationContainer>
);
};

const App = () => {
  // return <AsyncComponent />
  // return <ArithOpsScreen />
  return <MyWelcomeScreen />
  // return <Text>Hey</Text>
  // return <DynamicAdd />
return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Select Level"
        component={LevelScreen}
        options={{ title: 'Select Level' }}
      />
      <Stack.Screen name="MathScreen" component={MathScreen} />
      
    </Stack.Navigator>
  </NavigationContainer>
);
};

export default App;