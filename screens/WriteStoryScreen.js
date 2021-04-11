import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Toast } from 'react-native';
import {ToastAndroid} from 'react-native';
import * as React from 'react'
import db from '../config.js'


export default class WriteStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      Author: '',
      Title: '',
      windowWidth: window.innerWidth,
      Story: ''
    };
    this.submitStory = this.submitStory.bind(this);


  }

  render() {
    
    return (
      
      <View>

            <KeyboardAvoidingView behavior='padding' enabled></KeyboardAvoidingView>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>

        <TextInput style={styles.Input} placeholder='Author' value={this.state.Author} onChangeText={text => this.setState({ Author: text })}></TextInput>
        <Text> </Text>
        <TextInput placeholder="Title" value={this.state.Title} style={styles.Input} onChangeText={text => this.setState({ Title: text })}></TextInput>
        <Text> </Text>
        <TextInput
          placeholder="Write your story here!" value={this.state.Story} style={styles.story} onChangeText={text => this.setState({ Story: text })}></TextInput>
        <Text> </Text>
        <Text> </Text>
        <TouchableOpacity onPress={() => this.submitStory()}><Text>Submit Your Story!</Text></TouchableOpacity>

      </View>
    );
  }




  submitStory = async () => {
   await db.collection('Stories').add({
      Author: this.state.Author,
      Title: this.state.Title,
      Story: this.state.Story
    });
    this.setState({ Author: '', Title: '', Story: '', })
   alert('Story Submited!');

  
    //Toast.makeText(applicationContext, "Story Submited!", Toast.LENGTH_SHORT).show()
  }

}
const styles = StyleSheet.create({
  Input: {
    width: 200,
    borderWidth: 2,
    backgroundColor: 'blue'
  },
  story: {
    width: 500,
    height: 300,
    borderWidth: 2,
    backgroundColor: 'blue'
  },

});
