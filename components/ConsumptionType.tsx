import React from 'react';
import { StyleSheet, TouchableHighlight, View, Text } from 'react-native';

import GlobalStyles from '../utils/globalStyles';
import Input from './Input';


const ConsumptionType = ({ active, setActive, setPerson }) => {
  return (
    <View>
      <Text style={GlobalStyles.text}>Votre consommation</Text>
      <View style={styles.group}>
        <TouchableHighlight onPress={() => setActive(1)}>
          <View style={[styles.button, { backgroundColor: active === 1 ? '#70d15c': '#FFF' }]}>
            <Text style={styles.innerButton}>Ecologique</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => setActive(2)}>
          <View style={[styles.button, { backgroundColor: active === 2 ? '#ebd52f': '#FFF' }]}>
            <Text style={styles.innerButton}>Moyenne</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => setActive(3)}>
          <View style={[styles.button, { backgroundColor: active === 3 ? '#e64b09': '#FFF' }]}>
            <Text style={styles.innerButton}>Hors de contrôle</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={[styles.group, { justifyContent: 'space-evenly' }]}>
        <Input
          onChangeText={value => setPerson(value)}
          keyboardType="number-pad"
        />
        <Text style={GlobalStyles.text}>Personne(s)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  group: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  button: {
    width: 120,
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10
  },
  innerButton: {
    fontSize: 11,
    fontWeight: 'bold',
  }
});

export default ConsumptionType;