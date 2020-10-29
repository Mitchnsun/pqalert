import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Question = ({ children }) => (
  <Text style={styles.question}>{children}</Text>
);

const styles = StyleSheet.create({
  question: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default Question;
