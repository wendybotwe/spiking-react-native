import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, useWindowDimensions } from 'react-native';

const Component = () => {
  const [count, setCount] = React.useState(0);
  const { width } = useWindowDimensions(); // Responds to screen size changes

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={[styles.header, { fontSize: width > 350 ? 26 : 22 }]}>
          Wendy's Spiking App!
        </Text>

        <View style={{ maxWidth: width * 0.8 }}>
          <Text style={styles.text}>
            Here's some text to see if it will wrap correctly when the window size is changed. Here's a bit more text for the same reason.
          </Text>
        </View>

        <Text style={styles.text}>Count: {count}</Text>

        <Button title="Increase the count" onPress={() => setCount(count + 1)} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Component;


