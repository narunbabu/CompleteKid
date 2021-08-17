import 'react-native-gesture-handler';
import * as React  from 'react';
import { Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FAB } from 'react-native-paper';
const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};




const App = () => {
  return (
    <>
      <MyStack />

      <FAB
          // style={styles.fab}
          medium
          icon=""
          label='Next'
          onPress={()=><Text>Hello</Text>}
        /> 

      </>

  );
};



export default App;
