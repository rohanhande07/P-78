import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ReadStoryScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Read Story</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      heigth: 80,
    backgroundColor: "pink",
    textAlign: "center",
    marginTop: 10
  }
  })