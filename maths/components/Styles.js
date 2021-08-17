import { StyleSheet, } from 'react-native';
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      // alignSelf: "center",
      // backgroundColor: "#f5fcff"
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
      avatar: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        // left:-100,
        // top: 100,
      },
      abs_mark: {

        height: 100,
        alignSelf: "center",    
        position: 'relative',
        left:     0,
        top:      0,
      },
    mathcontainer: {
      overflow: 'hidden',
      flex: 1,
      // borderColor: '#000',
      // color:'#c92094',
      // borderRadius: '10px',
      fontWeight: "bold",      
      // borderWidth: 0.1,
      alignSelf: "center",
      // backgroundColor:'#75714d',
      // opacity: 0.1,
      width:250,
      position: 'relative',
      // left:     80,
      top:      0,
      // alignSelf: "center",
  
    },
    heading:{
      color: "#FFCB1F",
      justifyContent: "center",
      alignSelf: "center",
      marginTop: 10,
      fontSize: 50
    },
    line: {
      borderBottomColor: 'black',
      borderBottomWidth: 4,
      marginBottom: 30,
    },
    line50: {
      justifyContent: "center",
      alignSelf: "center",
      borderBottomColor: "#ddd",
      borderBottomWidth: 4,
      marginTop: 10,
      marginBottom: 10,
      // marginLeft:100,
      width:200,
    },
    intro: {
      flexDirection: "row",
      justifyContent: "center",
      
    },
    num:{    
        margin: 5,
        height: 60,
        width:40,
        textAlign: "center",
        fontSize: 50,
        color:'#47d16d',
        fontWeight: "bold",      
    },
    sign:{    
      margin: 5,
      height: 80,
      width:50,
      textAlign: "center",
      fontSize: 60,
      // borderColor: '#FFCB1F',
      color:'#c92094',
      // borderRadius: '10px',
      fontWeight: "bold",      
      // borderWidth: 1   
  },
  
  abs_sign: {
    color:'#c92094',
      // borderRadius: '10px',
      fontWeight: "bold", 
    // backgroundColor: '#FFFFFF',
    height:50,
    fontSize: 50,
    alignSelf: "center",
    // flexDirection: 'row',
    // bottom: 0,
    // justifyContent: 'space-between',
    position: 'relative',
    left:     -80,
    top:      125,
  },
  
    input: {
      height: 70,
      textAlign: "center",
      alignSelf: "center",
      width: 45,
      fontSize: 60,
      margin:5,
      borderColor: '#8d3ec2',
      borderWidth: 1 ,
      borderRadius: 10,
      // marginTop: 24,
      // marginBottom: 24,
      color: "#FFCB1F"
    },
    button: {
      backgroundColor: "#1D1D1B"
    },
    buttonText: {
      alignSelf: "center",
      padding: 30,
      fontSize: 25,
      color: "#FFCB1F",
      fontWeight: "bold"
    },
    result: {
      alignSelf: "center",
      color: "#FFCB1F",
      fontSize: 65,
      padding: 15
    }
  });
  
  