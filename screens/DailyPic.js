import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,Alert,Linking,Image,ImageBackground,ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
import axios from "axios";

// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm




export default class DailyPic extends React.Component {
  
constructor(props) {
        super(props);
        this.state = {
            apod: {},
        };
    }

    componentDidMount() {
        this.getAPOD()
    }


getAPOD = () => {

axios
.get('https://api.nasa.gov/planetary/apod?api_key=Syxv3hUappKwEa2MThP3NNNJZTXPMdPngBpKEeso')
.then(response => {
this.setState({apod: response.data})

})

.catch(error => {
Alert.alert(error.message)

})

}
  
  render(){

 return (
    <View style={styles.container}>
  <ScrollView>

      <Header
          backgroundColor={''}
          centerComponent={{
            text: '  Picture Of The Day',
            style: { color: 'Black', fontSize: 19, fontWeight: 'bold' },
          }}
        />

       <TouchableOpacity style = {{backgroundColor:'red', width: 210, height: 40, marginLeft: 60, marginTop:20,borderRadius:10}}   
        
        onPress =  {()=>{this.props.navigation.navigate('Home')}}   
        >

        <Text style = {{marginTop:10, marginLeft:10}}>Go To The Home Screen</Text>

        </TouchableOpacity>

<Text style = {styles.paragraph}> 
{this.state.apod.title}
</Text>

<TouchableOpacity 

onPress={() => Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load page", err))}

>


<Image 
                                source={{uri:this.state.apod.hdurl}}
                                style={{height:400, width:400, alignSelf:"center", marginTop:0}}
                            />


</TouchableOpacity>

<Text> {this.state.apod.explanation} </Text>
  
  </ScrollView>

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
