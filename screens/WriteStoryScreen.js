import React from 'react';
import { Text, View, TextInput,StyleSheet } from 'react-native';

export default class WriteScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <p>Story Title</p>
          <TextInput style={styles.inputBox} />
          <p>Story Author</p>
          <TextInput style={styles.inputBox} />
          <p>Write Your Story</p>
          <TextInput style={styles.inputBox} />
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    inputBox: {
      marginTop: 100,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 2,
      outline: 'none',
    } ,
  })
  