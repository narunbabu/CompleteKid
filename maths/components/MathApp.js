import React, { useState, useEffect }  from 'react'
// import CatApp from './maths/components/CatApp';
import { NumberElement } from './NumberElement';
import { Result } from './Result';
import { styles } from './Styles';
import { getRandomInt, getRandomNumbers } from './MathFunctions';

import { FAB } from 'react-native-paper';
import { Button,StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground } from 'react-native';

const levels=[{'level':0,'ndigits':1},{'level':1,'ndigits':2},{'level':2,'ndigits':2},
{'level':3,'ndigits':2},{'level':4,'ndigits':3} ]


export const  MathApp=({level}) =>{  

  level=levels[level]['level']
  let ndigits=levels[level]['ndigits']

  let randnumbs=getRandomNumbers(level)
  let resnumber=randnumbs[0]+randnumbs[1]
  let nrdigits=resnumber.toString().length

  const [randomnumbers, setrandomnumbers] = useState(randnumbs)//new Array(3).fill(1)
  const [resultnumber, setresultnumber] = useState(resnumber[0]+resnumber[1])//new Array(3).fill(1)
  const [guessdigits, setguessdigits] = useState(new Array(nrdigits).fill(0))//new Array(3).fill(1)
    const [isRightGuesses, setisRightGuesses] = useState(new Array(nrdigits).fill(false))//new Array(3).fill(1)

  function refreshPage() {
    randnumbs=getRandomNumbers(level)
    resnumber=randnumbs[0]+randnumbs[1]
    nrdigits=resnumber.toString().length
    setrandomnumbers( randnumbs)
    setresultnumber(resnumber)

    setguessdigits(new Array(nrdigits).fill(0))
    setisRightGuesses(new Array(nrdigits).fill(false))
    console.log('resultnumber',resnumber)
}

  return (
    <ImageBackground
        source={require("../assets/bg.png")}
        style={{ width: "100%", height: "100%" }} >
      <View style={styles.container}>
        <Text style={styles.heading}> Additions  </Text>
        <View style={styles.line}/>
          <View style={styles.mathcontainer}>
             <ImageBackground imageStyle={{ borderRadius: 15}}
              source={require("../assets/dark-black-vector-background.jpg")} 
              resizeMode="cover" 
              style={{ width: "100%", height: "100%" }} >
                <View style={{ top: -50}}>
                      <NumberElement mystyles={styles} randomnumbers={randomnumbers} />
                    <View style={styles.line50}/>
                    <Result  mystyles={styles} levels={levels} randomnumbers={randomnumbers}
                    resinput={{'guessdigits':guessdigits, 'setguessdigits':setguessdigits,
                    'isRightGuesses':isRightGuesses, 'setisRightGuesses':setisRightGuesses}} 
                    />  

                </View>

            </ImageBackground>             
          </View> 
        </View> 
        

        <FAB
          style={styles.fab}
          medium
          icon=""
          label='Next'
          onPress={refreshPage}
        /> 
    </ImageBackground> 
    
  );
}
