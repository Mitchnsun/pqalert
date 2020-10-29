import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

import Question from './components/Question';
import Input from './components/Input';
import Estimation from './components/Estimation';
import Error from './components/Error';

const UNIT_EST = 7;

const calculus = ({ stock, person, setEstimation }) => {
  const estimation = Math.round(stock * UNIT_EST / person);
  setEstimation(estimation.toFixed(0));
}

export default function App() {
  const [stock, setStock] = useState(null);
  const [person, setPerson] = useState(1);
  const [estimation, setEstimation] = useState(null);

  return (
    <View style={styles.container}>
      {isNaN(estimation) ? <Error msg="Veuillez entrer des chiffres" /> : null}
      <Question>Quel est votre stock ?</Question>
      <Input
        onChangeText={value => setStock(value)}
        placeholder="Nombre de rouleaux"
        keyboardType="number-pad"
        autoFocus
      />
      <Question>Nombre de personnes utilisant votre stock</Question>
      <Input
        defaultValue={person}
        onChangeText={value => setPerson(value)}
        placeholder="Nombre de personnes"
        keyboardType="number-pad"
      />
      <Button
        title="Calculer"
        onPress={() => calculus({ stock, person, setEstimation })}
      />
      <Estimation days={estimation} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#FFF',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
