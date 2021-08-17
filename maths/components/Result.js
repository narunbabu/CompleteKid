import React, {useState,useEffect} from 'react'
import { Text, View, Image,TextInput } from 'react-native';
// import {Checkmark} from 'react-checkmark'
// import Check from '../assets/iconmonstr-check-mark-7.svg';
// import Circle from './Circle';
import Svg, { Circle, Rect } from 'react-native-svg';
import { Icon } from 'react-native-eva-icons';


const CloseIcon=()=>{
    
<Icon name='close-circle-outline' fill='red'/>
}
const ModCloseIcon=(condval)=> {
    if(condval!==999){
        return null}
    else{
        return <CloseIcon width={50} height={50} />
      } 
  }
// import { CheckIcon } from './CheckIcon';
// import { CheckBox } from 'react-native-elements'

// import React, { Component } from 'react';
// import {CrossMarker} from 'react-native-animated-check-mark';
// class Result  extends Component 
let resultnumber=0;
let resdigits=[0,0];
export const Result = ({mystyles,levels,randomnumbers,resinput}) => {
    const CheckIcon = () => (<Icon name='checkmark-circle-2-outline' fill='green'/>);

    
    

    let guessdigits= [...resinput.guessdigits]
    let isRightGuesses=[...resinput.isRightGuesses]
    let nrdigits=guessdigits.length
    // let nrdigits=levels[1]['ndigits']
    // const [guessdigits, setguessdigits] = useState(new Array(ndigits).fill(0))//new Array(3).fill(1)
    // const [isRightGuesses, setisRightGuesses] = useState(new Array(ndigits).fill(false))//new Array(3).fill(1)

    useEffect(()=>{
        resultnumber=randomnumbers[0]+randomnumbers[1]
        resdigits=resultnumber.toString().split('').map(Number)
        guessdigits=resinput.guessdigits 
        isRightGuesses=resinput.isRightGuesses
        nrdigits=guessdigits.length
        // setguessdigits(new Array(ndigits).fill(0))
        // setisRightGuesses(new Array(ndigits).fill(false))
        console.log('useeffect resdigits in result', resdigits.join(','),isRightGuesses.join(','))
        // console.log('useeffect guessdigits,istureGuesses in result', resinput.guessdigits,resinput.isRightGuesses)
    },[randomnumbers])
    // console.log(ndigits)
        // let guessdigits
    
    
    // const clearDigit = (k)=>{
    //     let mydigits = [...guessdigits]; // copying the old datas array
        
    //     // newArr[index] = e.target.value;
    //     // console.log('digit',digit==null)
    //     mydigits[k]=null

        
    //     setguessdigits(mydigits)

    // }
    const bigaddDigit=(digit,k)=>{
        addDigit(digit,k)
        // console.log('later bigguessdigits in result', resinput.guessdigits,guessdigits)
        console.log('bigaddDigit resdigits: ', resdigits.join(','))
    }
    const addDigit= (digit,k)=>{
        // guessdigits=new Array(3).fill(1)
        // guessdigits[k]=digit
        // var mydigits=guessdigits.slice(0,guessdigits.length-1)
        let mydigits = [...guessdigits]; // copying the old datas array
        
        // newArr[index] = e.target.value;
        // console.log('digit',digit===null,k)

        mydigits[k]=digit*1%10

        
        guessdigits=mydigits

        let istureGuesses = [...isRightGuesses];
        // console.log('k and resdigits',k,mydigits[k],resdigits.join(','))
        istureGuesses[k]=checkifRightGuess(mydigits[k],resdigits[k])
        isRightGuesses= istureGuesses;
        
        resinput.setisRightGuesses(istureGuesses)
        resinput.setguessdigits(mydigits)
        // console.log('k and resdigits',k,mydigits[k],resdigits.join(','))
        console.log('laterguessdigits,istureGuesses in result', guessdigits.join(','),isRightGuesses.join(','))
        // let myVar = setTimeout(()=>{ 
        //     if (istureGuesses[k]) {
        //         setguessdigits(mydigits)
        //         setisRightGuesses(istureGuesses)
        //     }else{
        //         mydigits[k]=0
        //         setisRightGuesses(istureGuesses)
        //     }

        // }, 500)

        
        // console.log({'isRightGuesses':istureGuesses,'res':resultnumber,'resdigits':resdigits,'mydigits':mydigits})
        // setguessdigits([...mydigits])
    }
    const checkifRightGuess= (guess,result)=>guess==result;
    return (
        <>   
        <View style={mystyles.intro}> 
            {Array.apply(0, Array(nrdigits).fill(0)).map(function(_,b) { return b ; })
            .map((k)=>
              <TextInput
                pattern="[+-]?\d+(?:[.,]\d+)?"
                keyboardType="numeric"
                style={mystyles.input}
                key={String(k)}
                onChangeText= {(digit)=>bigaddDigit(digit,k)}
                value={isRightGuesses[k]?guessdigits[k].toString():'' }
                // placeholder=''
                // {guessdigits[k].toString() || '' }
                editable={!isRightGuesses[k]} 
              />)}
            
    </View>
    <View style={mystyles.line50}/>
    <View style={mystyles.intro}>
     {Array.apply(0, Array(nrdigits).fill(0)).map(function(_,b) { return b ; })
                .map((k)=>
                <View style={mystyles.num} key={String(k)}> 
                    {isRightGuesses[k]?  <CheckIcon width={50} height={50} />: null
                    }
                </View>)} 
                
    </View>
    {/* <View style={mystyles.line50}/> */}
    {/* <CheckIcon  width={25} height={25}  /> */}
    {/* <View style={mystyles.abs_mark}> */}
    
            {/* {isRightGuesses.every(v => v === true)? <CheckIcon  width={100} height={100}  />  : null} */}
            {/* </View> */}
    </>
    )
    return (
        <>
            
            {/* <View style={mystyles.intro}> */}

            {
            // Array.apply(0, Array(ndigits)).map(function(_,b) { return b ; })
            // .map((k)=>
            //   <TextInput
            //     // placeholder={k}
            //     pattern="[+-]?\d+(?:[.,]\d+)?"
            //     keyboardType="numeric"
            //     style={mystyles.input}
            //     key={k}
            //     // onKeyPress={({ nativeEvent,digit,k }) => {
            //     //     nativeEvent.key === 'Backspace' ? clearDigit(k) : addDigit(nativeEvent.key,k)
            //     //   }}
            //     onChangeText= {(digit)=>addDigit(digit,k)        }
            //     value={guessdigits[k]}
            //     editable={!guessdigits[k]} 
            //   />)
              }
              {/* <TextInput
                placeholder="?"
                keyboardType="numeric"
                style={styles.input}
                onChangeText={mass=>setMass(mass)}
              /> */}
            {/* </View> */}

            

            {/* <View style={mystyles.intro}>
                {Array.apply(0, Array(ndigits)).map(function(_,b) { return b ; })
                .map((k)=>
                <Text style={mystyles.num}>
                                            {isRightGuesses[k]? <Checkmark  size='50px' color ='green' />  : null}
                </Text>)}
            </View> */}

            {/* <View style={mystyles.abs_mark}>
            {isRightGuesses.every(v => v === true)? <CheckBox  size='100px' color ='green' />  : null}
            </View>
             */}
        </>
    )
}
