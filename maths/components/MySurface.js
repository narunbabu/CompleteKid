import  React, {useState} from 'react';
// import { Surface, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import {Card, Surface,Avatar , Text,List,Colors, Button, Title, Paragraph  } from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const myfunc=()=><Text>Hello</Text>
export const MySurface = ({name,symbol,myfunc}) => {
  [value,setValue]=useState('Look here')
  // <Surface style={styles.surface}>
     
  //    {/* <List.Icon color={Colors.blue500} icon="plus" /> */}
  //    {/* <Text style={{fontSize:40}}>{symbol}</Text> */}
  //    <Avatar.Text  size={50} label={symbol} color={Colors.blue500} />
  //    <Text style={{fontSize:12}}>{name}</Text>
     
  // </Surface>
  // const myfunc=()=>setValue('Newvalue')
return (
<Card onPress={myfunc}>
    {/* <Card.Title title={symbol} subtitle={name} left={LeftContent} /> */}
    <Card.Content>
    <Avatar.Text  size={50} label={symbol} color={Colors.blue500} />
      <Paragraph>{name}</Paragraph>
    </Card.Content>
    {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
    {/* <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions> */}
  </Card>

);
  }

// export default MySurface;

const styles = StyleSheet.create({
  surface: {
    padding: 18,
    height: 120,
    margin:20,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    backgroundColor:'#d4ed82',
    borderRadius:20
  },
});