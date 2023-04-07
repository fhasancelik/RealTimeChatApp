import * as React from 'react';
import { StyleSheet,View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { List,Avatar,Divider,FAB,Dialog,Portal,Button,TextInput,Text,Title,Subheading } from 'react-native-paper';

const Stack=createNativeStackNavigator()





function Settings() {
  return (
<View style={{alignItems:"center",marginTop:20}}>
  <Avatar.Text label='UN'/>
  <Title>User Name</Title>
  <Subheading>user@gmail.com</Subheading>
  <Button>Sign Out</Button>

</View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Settings