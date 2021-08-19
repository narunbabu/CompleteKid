import 'react-native-gesture-handler';
import * as React  from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FAB } from 'react-native-paper';
import { Animated, Text, View, StyleSheet, Button, SafeAreaView } from "react-native";
import { MathApp} from './maths/components/MathApp';
import { styles} from './maths/components/Styles'
import { AsyncComponent } from './AsyncComponent';
// import {AsyncApp} from './AsyncComponent'
// impoert {AsyncComponent}
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AsyncStorage } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  let level=1

  return (
    <>
    <Button
      title="Go to Ved's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
    {/* <Button title="Level 1" onPress={() => navigation.navigate('MathScreen', { level: 1 })  }  /> */}
    {Array.apply(0, Array(4).fill(0)).map(function(_,b) { return b ; })
            .map((k)=>
    <FAB key={k} style={{margin:10, width:200,alignSelf: "center",}} medium icon="" label={'Level '+(k+1)} 
    onPress={() => navigation.navigate('MathScreen', { level: k+1 }) } />)}

    {/* <Text style={{fontSize:40}}>{'()=>getData()'}</Text> */}
    {/* <Button title="Level 2" onPress={() => navigation.navigate('MathScreen', { level: 2 })  }  />
    <Button title="Level 3" onPress={() => navigation.navigate('MathScreen', { level: 3 })  }  />
    <Button title="Level 4" onPress={() => navigation.navigate('MathScreen', { level: 4 })  }  /> */}
    </>
  );
};



const ProfileScreen = ({ navigation, route }) => {
  // let user = await AsyncStorage.getItem('user');  
  // let parsed = JSON.parse(user);  
  
  return (
    <>
    <Text>Hello</Text>
    {/* <AsyncApp /> */}
    </>
  )
}
  // return <Text>This is {route.params.name}'s profile</Text>;
  

const MathScreen = ({ navigation, route }) => {
  // let keys=AsyncStorage.getAllKeys();
  return <MathApp level={route.params.level}/>
  // let values=AsyncStorage.getItem('name');

  
}

const App = () => {
  return <AsyncComponent />
// return (
//   <NavigationContainer>
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{ title: 'Welcome' }}
//       />
//       <Stack.Screen name="Profile" component={ProfileScreen} />

//       <Stack.Screen name="MathScreen" component={MathScreen} />
      
//     </Stack.Navigator>
//   </NavigationContainer>
// );
};

export default App;