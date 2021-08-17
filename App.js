import 'react-native-gesture-handler';
import * as React  from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FAB } from 'react-native-paper';
import { Animated, Text, View, StyleSheet, Button, SafeAreaView } from "react-native";
import { MathApp} from './maths/components/MathApp';
import { Styles} from './maths/components/MathApp';

import AsyncStorage from '@react-native-community/async-storage';
const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  let level=1
  let _storeData = async () => {
    try {
        await AsyncStorage.setItem('name', 'Vedansh');
    } catch (error) {
        // Error saving data
    }
}
  return (
    <>
    {/* <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    /> */}
    {/* <Button title="Level 1" onPress={() => navigation.navigate('MathScreen', { level: 1 })  }  /> */}
    {Array.apply(0, Array(4).fill(0)).map(function(_,b) { return b ; })
            .map((k)=>
    <FAB style={{margin:10, width:200,alignSelf: "center",}} medium icon="" label={'Level '+(k+1)} 
    onPress={() => navigation.navigate('MathScreen', { level: k+1 }) } />)}
    {/* <Button title="Level 2" onPress={() => navigation.navigate('MathScreen', { level: 2 })  }  />
    <Button title="Level 3" onPress={() => navigation.navigate('MathScreen', { level: 3 })  }  />
    <Button title="Level 4" onPress={() => navigation.navigate('MathScreen', { level: 4 })  }  /> */}
    </>
  );
};


const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};
const MathScreen = ({ navigation, route }) => {
  let keys=AsyncStorage.getAllKeys();
  // let values=AsyncStorage.multiGet(keys);
//   _retrieveData = async () => {
//     try {
//         const value = await AsyncStorage.getItem('name');
//         if (value !== null) {
//             // Our data is fetched successfully
//             console.log(value);
//         }
//     } catch (error) {
//         // Error retrieving data
//     }
// }

  return <>
  <Text> {keys[0]}</Text>
  <MathApp level={route.params.level}/>
  </>
  // return <Text>This is {route.params.name}'s profile</Text>;
};
const App = () => {
return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />

      <Stack.Screen name="MathScreen" component={MathScreen} />
      
    </Stack.Navigator>
  </NavigationContainer>
);
};

export default App;