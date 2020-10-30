import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import GlobalStyles from '../utils/globalStyles';

const Question = ({ children }) => (
  <View style={GlobalStyles.block}>
    <Text style={styles.question}>{children}</Text>
  </View>
);

const styles = StyleSheet.create({
  question: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default Question;
