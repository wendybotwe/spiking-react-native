import React from 'react';
import { View, StyleSheet } from 'react-native';
import ChoreList from './components/ChoreList';
import Component from './Component';

export default function App() {
  return (
    <View style={styles.container}>
      <Component />
      <ChoreList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: 50,
  },
});