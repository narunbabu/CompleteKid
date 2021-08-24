import { Text, View, Image,TextInput,ImageBackground ,StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';
// import { styles } from './Styles';
import AsyncStorage from '@react-native-community/async-storage';  
import DatePicker from 'react-native-date-picker'
import { FAB } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
// import { green100 } from 'react-native-paper/lib/typescript/styles/colors';
const storeData= async (obj)=>{
    // let obj = {  
    //   name: 'Vedansh',  
    //   email: 'ved@gmail.com',  
    //   city: 'Hyderabad',  
    // }  
    // obj['name']=topname;
    console.log('Following obj is being saved')
    console.log(obj)
  
      try {
        await AsyncStorage.setItem('users',JSON.stringify(obj)); 
        console.log('Data saving done')
      } catch (e) {
        console.log('Data not set')
        // saving error
      }
    }
const ChildComponent=(users)=>{
    const [uid, setUid] = useState(users.id)
    const [dob, setDob] = useState('')
    const [dor, setDor] = useState('')
    const [name, setName] = useState('')
    // const [mclass, setmClass] = useState(null)
    
    // var userchild={'id':users.id,'name':'',dob:'','sclass':'','dor':''}
    users=users.users
    var date= new Date()
    console.log('in ChildComponent',users)
    const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  
  const [items, setItems] = useState([
    {label: 'Under KG', value: 0},
    {label: '1st Class', value: 1},
    {label: '2nd Class', value: 2},
    {label: '3rd Class', value: 3},
    {label: '4th Class', value: 4}
  ]);
  var userchild={'id':uid,'name':name,dob:dob,'sclass':value,'dor':dor}
    return (

        <View style={styles.container}>
            <Text style={styles.label}>Chaild Details </Text>
        <View style={styles.intro}>
                <Text style={styles.label}>Name: </Text>
            <TextInput style={styles.name}
                placeholder="Child Name"  
                onChangeText={(text) => setName(text)}    
            />
            </View>
            <View style={styles.intro}>
            <Text style={styles.label}>DoB: </Text>
            <DatePicker style={styles.date}
                date={new Date('2016-07-03')}
                mode={'date'}
                // placeholder="Date of Birth"
                onDateChange={(date) => {
                    // userchild.dob=date;
                    setDob(date)
                    setDor(new Date())
                    // userchild.dor=new Date(); 
                console.log('in child datepicker',userchild)
                    }}
            />
            </View>
            
            <View style={{alignItems:'flex-end',flexDirection: 'row'}}>
                <Text style={{width:'30%',alignSelf:'flex-start',fontSize:25,textAlign: "center",}}>Class: </Text>
                <View style={{minHeight: 150}}>
                <DropDownPicker style={{width:'60%',alignSelf:'auto'}}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems} 
                    // onChangeValue={(value) =>setmClass(value) }
                    />
                </View>            
            </View>
            <View style={styles.fixToText}>
            <Button  style={styles.btn} title="Register"
                onPress={() =>  {
                    // userchild.sclass=value                 

                    console.log('button Clicked',userchild,users)
                    users.children.push(userchild)
                    console.log('button Clicked',userchild,users)

                    storeData(users)

                    }  } />
            </View>

            </View>
    )

}

export const UserScreen=()=> {
    var users={'parent':{'name':'','dob':'','dor':''},'children':[]}
var todo=[{'childid':0,'arith_type':'','level':0,'n_of_probs':20,'set_date':0,'target_date':0}]
var score=[{'childid':0,'arith_type':'','level':0,'start_time':0,'end_time':0,'passed':false}]
console.log('after defined',users)
// const [date, setDate] = useState(new Date())
var date= new Date()



    return (

        <ImageBackground
        source={require("../assets/sky.jpg")}
        style={{ width: "100%", height: "100%" }} >
            <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          >
          </Image>
          <Text style={{alignSelf:'center',fontSize:30,color:'#4ce071'}}>Welcome to Completekid</Text>
          <View style={styles.container}>
          <Text style={styles.label}>Parent Details </Text>
            <View style={styles.intro}>
                <Text style={styles.label}>Name: </Text>
            <TextInput style={styles.name}
                placeholder="Parent Name"  
                onChangeText={(text) => users.parent.name=text}    
            />
            </View>
            <View style={styles.intro}>
            <Text style={styles.label}>DoB: </Text>
            <DatePicker style={styles.date}
                date={new Date('1981-06-07')}
                mode={'date'}
                // placeholder="Date of Birth"
                onDateChange={(date) => {
                    users.parent.dob=date   
                    users.parent.dor=new Date();                  
                // console.log(users)
            }}

            />
            
            </View>
            </View>
            <Text>{JSON.stringify(users)}</Text>
            <ChildComponent users={users} id={0} />
            

      </ImageBackground>
        
        
    )
}
export const styles = StyleSheet.create({
    container:{
        // height: 200,
        // flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        alignSelf: "center",
        width:'100%',
        fontSize: 40,
        margin:5,
        borderColor: '#8d3ec2',
        borderWidth: 1 ,
        borderRadius: 20,
    },
    btn: {
        margin: 16,
        borderRadius: 20,
        width:200

      },
    intro: {
        flexDirection: "row",
        justifyContent: "center",
        
      },
    background: {
      width: '100%',
      height: '100%'
    },
    logo:{
      width: 120,
      height: 120,
    //   marginLeft: '15%',
      marginTop: '10%',
      marginBottom: '10%',
      borderRadius: 60,

    alignSelf: "center",
    },
    name: {
        height: 50,
        textAlign: "center",
        alignSelf: "center",
        width: 200,
        fontSize: 30,
        color: "#FFCB1F",
        margin:0,
        borderColor: '#8d3ec2',
        borderWidth: 1 ,
        borderRadius: 10,
        backgroundColor: "#111"
      },
      date: {
        height: 50,
        alignSelf: "center",
        width: 220,
        // margin:0,
        borderColor: '#8d3ec2',
        borderWidth: 1 ,
        borderRadius: 20,
      },
    label:{
        textAlign: "center",
        alignSelf: "center",
        // width: 200,
        fontSize: 20,
        color: "#000",
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: "center",
        marginTop:-30,
        
        alignSelf: "center",
      },

});
// export default UserScreen
