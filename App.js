import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView  } from 'react-native';
import LoginScreen  from "./src/screens/Login";

const App  = () => {
  return (
    <SafeAreaView style={styles.root}>
      <LoginScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'E5E5E5'
  },
});

export default App;
