
import React, {useState} from 'react';
// import { styles } from './Styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, Image,TextInput,ImageBackground ,StyleSheet, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';  
import DatePicker from 'react-native-date-picker'
import { FAB } from 'react-native-paper';
import { UserScreen, styles } from './UserScreen';
import { MathApp} from './maths/components/MathApp';


export const MyWelcomeScreen=()=> {
  const [iserror, setiserror] = useState(null)
  const [users, setUsers] = useState({})


    const retrieveData = async () => {
        try {
           pusers =  await AsyncStorage.getItem('users');      
          let musers = JSON.parse(pusers);  
          setUsers(musers)
          // console.log('in retrieve data',users) 

          }  catch(e) {
            setiserror(ture)
            console.log('Not retrieved')  
          }
      }
      retrieveData()
      if (!iserror){      
      if(typeof users.children!='undefined'){
        return(
          <NavigationContainer>
            <Stack.Navigator>
            <ImageBackground
                      source={require("../assets/sky.jpg")}
                      style={{ width: "100%", height: "100%" }} >
                          <Image
                          source={require('../assets/logo.png')}
                          style={styles.logo}
                          resizeMode="contain"
                        >
                        </Image>
                        <Text style={{alignSelf:'center',fontSize:50,color:'#4ce071'}}>Welcome {users.children[0].name}</Text>
                    

                        <Stack.Screen
                          name="Select Level"
                          component={LevelScreen}
                          options={{ title: 'Select Level' }}
                        />
                        <Stack.Screen name="MathScreen" component={MathScreen} />
                    
                    </ImageBackground>


              
            </Stack.Navigator>
          </NavigationContainer>

          
        )
      
      }else{
          return <UserScreen/>
      }
    }
    else{
      return <UserScreen/>
  }
}

export default MyWelcomeScreen
