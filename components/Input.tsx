import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = props => (
  <TextInput
    style={styles.input}
    {...props}
  />
);

const styles = StyleSheet.create({
  input: {
    height: 40,
    color: '#FFF',
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: '1.5rem',
  },
});

export default Input;