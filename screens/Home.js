import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground,Image} from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm

export default class HomeScreen extends React.Component {
  render(){

 return (
    <View style={styles.container}>

 <ImageBackground source = {require('../assets/space.gif')} style = {{flex:1}}>

 <Header
          backgroundColor={''}
          centerComponent={{
            text: 'Stellar App',
            style: { color: 'Black', fontSize: 19, fontWeight: 'bold' },
          }}
        />
  
   <Image style ={{width:100,height:100, left:'35%',top:0}} source = {require('../assets/main-icon.png')}  />

     <TouchableOpacity style = {{backgroundColor:'white', width: 210, height: 120, marginLeft: 60, marginTop:0,borderRadius:30}}   
        
        onPress =  {()=>{this.props.navigation.navigate('DailyPic')}}   
        >

       <Text style = {{marginTop:10, marginLeft:10, fontWeight:'bold', fontSize:25}}> Daily Picture </Text>

 <Image style ={{position:'absolute' , width:120,height:80, left:40,top:40}} source = {require('../assets/daily_pictures.png')}  />


        </TouchableOpacity>

             <TouchableOpacity style = {{backgroundColor:'white', width: 210, height: 150, marginLeft: 60, marginTop:20,borderRadius:30}}   
        
        onPress =  {()=>{this.props.navigation.navigate('SpaceCraft')}}   
        >

       <Text style = {{marginTop:10, marginLeft:10, fontWeight:'bold', fontSize:25}}> Space Crafts </Text>

 <Image style ={{position:'absolute' , width:120,height:180, left:40 ,top:10,  transform: [{ rotate: '117deg', }]}} source = {require('../assets/space_crafts.png')}  />

        </TouchableOpacity>

          <TouchableOpacity style = {{backgroundColor:'white', width: 210, height: 160, marginLeft: 60, marginTop:20,borderRadius:30}}   
        
        onPress =  {()=>{this.props.navigation.navigate('StarMap')}}   
        >

       <Text style = {{marginTop:10, marginLeft:10, fontWeight:'bold', fontSize:25}}> Star Map </Text>

 <Image style ={{position:'absolute' , width:100,height:100, left:50,top:40, transform: [{ rotate: '90deg', }]}} source = {require('../assets/star_map.png')}  />

        </TouchableOpacity>

</ImageBackground>
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
