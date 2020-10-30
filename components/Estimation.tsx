import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Estimation = ({ days }) => {
  if(!days || isNaN(days)) return null;
  return <Text style={styles.text}>{`Vous pouvez tenir ${days} jour(s)`}</Text>
}
  

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default Estimation;