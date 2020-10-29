import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Error = ({ msg }) => (
  <Text style={styles.error}>{msg}</Text>
);

const styles = StyleSheet.create({
  error: {
    color: '#b00404',
    fontWeight: 'bold',
  },
});

export default Error;
