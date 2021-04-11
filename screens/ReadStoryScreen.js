import * as React from "react"
import { Text, TextInput, View, TouchableOpacity, StyleSheet, } from 'react-native'
import firebase from 'firebase';
import db from '../config';

export default class ReadStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      searchVal: '',
      search: '',
      Author: '',
      AllVal: []
     
    }
  }
  search = async () => {
    var search = this.state.search
    var Val = await db.collection("Stories").where("Title", "==", search).get();
    var Val2 = await db.collection("Stories").get();
    var Story = [];
    var Author = [];
    if (Val){
    Val.forEach((doc) => {
   
      Title.push(doc.data().Title);
      Author.push(doc.data().Author);
    
    });
  }
  else{
    alert("Title not Found")
  }
  this.setState({searchVal : Story}); 
  this.setState({Author : Author}); 
   this.setState({AllVal: Val2})


  }
  render() {
    return (
      <View>
        <Text>Read screen</Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <TextInput placeholder={"Search here"} value={this.state.search} onChangeText={(value) => { this.setState({ search: value }) }}></TextInput>
        <TouchableOpacity onPress={() => {this.search()}} ><Text>Search!</Text></TouchableOpacity>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text>{this.state.Author}</Text>
        <Text> </Text>
        <Text>{this.state.searchVal}</Text>
      
      </View>
    );
  }


}
