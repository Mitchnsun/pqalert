import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import GlobalStyles from '../utils/globalStyles';

const Question = ({ children }) => (
  <View style={GlobalStyles.block}>
    <Text style={GlobalStyles.text}>{children}</Text>
  </View>
);

export default Question;
