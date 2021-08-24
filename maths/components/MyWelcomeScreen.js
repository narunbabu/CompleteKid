
import React, {useState,useEffect} from 'react';
// import { styles } from './Styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, Image,TextInput,ImageBackground ,StyleSheet, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';  
import { ArithOpsScreen } from './ArithOpsScreen';
import DatePicker from 'react-native-date-picker'
import { FAB } from 'react-native-paper';
// import { StyleSheet } from 'react-native';
import {Card, Surface,Avatar , List,Colors,Title, Paragraph  } from 'react-native-paper';
import { UserScreen, styles } from './UserScreen';
import { MathApp} from './MathApp';
import { MySurface } from "./MySurface";
const Stack = createStackNavigator();
const MathScreen = ({ navigation, route }) => {
  const { user_id, operation,level } = route.params;
  console.log('in MathScreen',user_id, operation,level)
  return <MathApp level={level} user_id={user_id} operation={operation} />  
}


const LevelScreen = ({ navigation,route }) => {
  // operation=route.params.operation
  const { user_id, operation } = route.params;

  // let level=1
return (
  <>
  {/* <Button
    title="Go to Ved's profile"
    onPress={() =>
      navigation.navigate('Profile', { name: 'Jane' })
    } /> */}

  {Array.apply(0, Array(4).fill(0)).map(function(_,b) { return b ; })
          .map((k)=>
  <FAB key={k} style={{margin:10, width:200,alignSelf: "center",}} medium icon="" label={'Level '+(k+1)} 
  onPress={() => navigation.navigate('MathScreen', { user_id:user_id, operation:operation,level: k+1 }) } />)}
  </>
);
};

const GamesScreen = ({ navigation,route }) => {
  const { user_id, user_name } = route.params;

  const arithops=[{name:'Addition',operator:'+'},{name:'Subtraction',operator:'−'},
{name:'Multiplication',operator:'×'}]//,{name:'Division',operator:'÷'},{name:'Comparisons',operator:'='}]

return (<View style={{flexDirection: "row",flexWrap: "wrap",alignSelf: "center", justifyContent: "center",}}
>
{arithops.map((k)=><MySurface  key={k.operator} name={k.name} symbol={k.operator}
// myfunc={()=> console.log('from welcome screen')}/>)}
myfunc={() => navigation.navigate('LevelScreen', { user_id:user_id,operation: k.name }) } />)}



</View>)
// onPress={() => navigation.navigate('LevelScreen', { name:k.name,symbol:k.operator}) }
  // let level=1

};

const RegisteredUserScreen= ({ navigation,route }) => {
  const { uids, unames } = route.params;
  // uids=[0,1]
  // unames=['ved','tat']
  console.log(route.params)
  console.log(uids, unames)
  k=0
  return(

  <>
  {/* <Text style={styles.name}>Users' Page {unames[Array(uids.length).fill().map((element, index) => index + 0)[0]]}</Text> */}
  {/* <FAB key={k} style={{margin:10, width:200,alignSelf: "center",}} medium icon="" label={unames[k]+ 'Games'} 
  onPress={(k) => navigation.navigate('GamesScreen', { user_id:uids[k],user_name:unames[k]}) } /> */}


  {Array(uids.length).fill().map((element, index) => index + 0).map((k )=>         <FAB key={k} style={{margin:10, width:200,alignSelf: "center",}} medium icon="" label={unames[k]+ ' Games'} 
  onPress={() => navigation.navigate('GamesScreen', { user_id:uids[k],user_name:unames[k]}) } />)}





  {/* <FAB key={k} style={{margin:10, width:200,alignSelf: "center",}} medium icon="" label={unames[k]+ 'Games'} 
  onPress={() => navigation.navigate('GamesScreen', { user_id:uids[k],user_name:unames[k]}) } /> */}
 

  
  </>
  )

}





export const MyWelcomeScreen=()=> {
  const [iserror, setiserror] = useState(null)
  const [users, setUsers] = useState({})
  let urs={'parent':{'name':'','dob':'','dor':''},'children':[]}
  const removeItemValue=async (key) =>{
    try {
        await AsyncStorage.removeItem(key);
        return true;
    }
    catch(exception) {
        return false;
    }
}
// removeItemValue('users')

    // const retrieveData = async () => {
    //     try {
    //        pusers =  await AsyncStorage.getItem('users');      
    //       let musers = JSON.parse(pusers);  
    //       setUsers(musers)
    //       // console.log('in retrieve data',users) 

    //       }  catch(e) {
    //         setiserror(true)
    //         console.log('Not retrieved')  
    //       }
    //   }
    //   retrieveData()


      useEffect(() => {
        const fetchData = async () => {
           await AsyncStorage.getItem('users') 
            .then((res) => JSON.parse(res))
            .then((res) => res? setUsers(res):setUsers(urs))
            .catch((e) => setiserror(true));
        };
        const timer = setTimeout(() => {
          fetchData();
        }, 50);    
       return () => clearTimeout(timer);
      }, []);
      console.log(iserror,users)
      if (!iserror){     

      if(users.children && users.children.length>0){
        // console.log(users.children)
        var userids=users.children.map((k)=>k.id)
        var usernames=users.children.map((k)=>k.name) 
        // console.log(userids,usernames)
        return(

          <NavigationContainer>
            
            <Stack.Navigator>
            {/* <ImageBackground
                      source={require("../assets/sky.jpg")}
                      style={{ width: "100%", height: "100%" }} > */}
            
                          {/* <Image
                          source={require('../assets/logo.png')}
                          style={styles.logo}
                          resizeMode="contain"
                        >
                        </Image> */}
                        {/* <Text style={{alignSelf:'center',fontSize:50,color:'#4ce071'}}>Welcome {users.children[0].name}</Text> */}
                    
                        
                        {/**/} 
                        <Stack.Screen
                          name="User Screen"
                          component={RegisteredUserScreen}
                          options={{ title: 'User Accounts' }}
                          initialParams={{ uids: userids,unames:usernames }}
                        /> 

                        <Stack.Screen name="GamesScreen" component={GamesScreen} options={{ title: 'Select an Operation' }}
                        initialParams={{ user_id: userids[0],user_name:usernames[0] }}/>
                        
                        <Stack.Screen
                          name="LevelScreen"
                          component={LevelScreen}
                          options={{ title: 'Select Level' }}
                        />
                        <Stack.Screen name="MathScreen" component={MathScreen} options={{ title: 'Maths Operation' }}
                        initialParams={{ user_id: userids[0], operation:'Addition',level:0 }} 
               
                        /> 

                        {/*      */}
                        
                    
                   
                        {/* </ImageBackground> */}

              
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


// const styles = StyleSheet.create({
//   surface: {
//     padding: 0,
//     height: 120,
//     margin:10,
//     width: 140,
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 4,
//     // backgroundColor:'#d4ed82',
//     borderRadius:20
//   },
//   fab: {
//     position: 'absolute',
//     margin: 16,
//     right: 0,
//     bottom: 0,
//   },
// });