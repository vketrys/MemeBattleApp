import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    color: 'white',
  },
});

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello World !</Text>
      <StatusBar style="auto" />
    </View>
  );
}
