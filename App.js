import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './screens/Home';
import SpaceCraft from './screens/SpaceCraft';
import StarMap from './screens/StarMap';
import DailyPic from './screens/DailyPic';

// You can import from local files
//import AssetExample from './components/AssetExample';
// or any pure javascript modules available in npm

const Stack = createStackNavigator();

export default class App extends React.Component {
render(){
 return (
   <View style = {styles.container}>
    <NavigationContainer>
<Stack.Navigator initialRouteName= 'Home' screenOptions = {{
headerShown:false
}}>
<Stack.Screen name = 'Home' component = {HomeScreen} />
<Stack.Screen name = 'DailyPic' component = {DailyPic} />
<Stack.Screen name = 'SpaceCraft' component = {SpaceCraft} />
<Stack.Screen name = 'StarMap' component = {StarMap} />


</Stack.Navigator>
   </NavigationContainer>
   </View>

);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
