import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground,Image, TextInput,SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
import {WebView} from 'react-native-webview'
// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in 



export default class StarMap extends React.Component {

constructor(props){
super();
this.state={
latitude: '',
longitude: '',
          }
            }

render(){
const { longitude, latitude } = this.state;
   const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`
 return (
    <View style={styles.container}>
        <SafeAreaView/>
     <ImageBackground source = {require('../assets/white.png')} style = {{flex:1}}>

      <Header
          backgroundColor={''}
          centerComponent={{
            text: 'Star Map',
            style: { color: 'Black', fontSize: 19, fontWeight: 'bold' },
          }}
        />

           <TouchableOpacity style = {{backgroundColor:'yellow', width: 210, height: 40, marginLeft: 60, marginTop:20,borderRadius:10}}   
        
        onPress =  {()=>{this.props.navigation.navigate('Home')}}   
        >

        <Text style = {{marginTop:10, marginLeft:10}}>Go To The Home Screen</Text>

        </TouchableOpacity>



<TextInput
style = {{height:40, borderColor:'gray',borderWidth:1}}
placeholder = 'Enter your latitude'
placeholderTextColor = '#ffff#000000'
onChangeText = {(text) => {

this.setState({
latitude:text
  })
}}

/>


<TextInput
style = {{height:40, borderColor:'gray',borderWidth:1}}
placeholder = 'Enter your longitude'
placeholderTextColor = '#ffff#000000'
onChangeText = {(text) => {

this.setState({
longitude:text
  })
}}

/>

<WebView
scalesPageToFit= {true}
source = {{uri: path}}
style = {{marginTop:20, marginBottom:20,}}
/>




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
