import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Bem vindo a home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
