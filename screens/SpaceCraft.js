import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,FlatList,ScrollView,Image,ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
import axios from "axios";
// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm


export default class SpaceCraft extends React.Component {

   constructor(props) {
        super(props);
        this.state = {
            spacecrafts: {},
        };
    }

componentDidMount() {
        this.getData()
    }

getData=()=>{
axios.get('https://ll.thespacedevs.com/2.0.0/config/spacecraft/')
.then(response => {

this.setState({spacecrafts:response.data.results})
console.log(response.data.results)
})

.catch(error => {
console.log(error.message)

})

}

renderItem = ({item}) => {

return(
<View style={{borderWidth:1,justifyContent:'center',alignItems:'center',marginBottom:10,elevation:10}}>
<Image source={{uri: item.agency.image_url}} style = {{width:'100%', height:200, marginTop:15,marginBottom:15,marginRight:10}} > </Image>

<Text style = {{fontWeight:'bold', fontSize:20,}}> {item.name} </Text>
<Text style={{color:'#696969'}}> {item.agency.name} </Text>

<Text> DESCRIPTION: </Text>

<Text style={{color:'#A9A9A9',marginLeft:10,marginRight:10}}> {item.agency.description} </Text>

</View>

)


}


  render(){

 return (
    <View style={styles.container}>
    <ScrollView>

      <Header
          backgroundColor={''}
          centerComponent={{
            text: 'Space Craft News',
            style: { color: 'Black', fontSize: 19, fontWeight: 'bold' },
          }}
        />

           <TouchableOpacity style = {{backgroundColor:'green', width: 210, height: 40, marginLeft: 60, marginTop:20,borderRadius:10,marginBottom:20}}   
        
        onPress =  {()=>{this.props.navigation.navigate('Home')}}   
        >

        <Text style = {{marginTop:10, marginLeft:10}}>Go To The Home Screen</Text>

        </TouchableOpacity>

<View styles = {{flex:0.75,}}>
<FlatList
keyExtractor={this.keyExtractor}
data = {this.state.spacecrafts}
renderItem={this.renderItem}
/>

</View>
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
