import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Keyboard, StyleSheet, Button, Text, View, SafeAreaView, ScrollView } from 'react-native';

import Question from './components/Question';
import Input from './components/Input';
import Estimation from './components/Estimation';
import Error from './components/Error';
import Logo from './utils/Logo';
import GlobalStyles from './utils/globalStyles';

const UNIT_EST = 5;

const calculus = ({ stock, person, setEstimation }) => {
  Keyboard.dismiss();
  const estimation = Math.round(stock * UNIT_EST / person);
  setEstimation(estimation.toFixed(0));
}

export default function App() {
  const [stock, setStock] = useState(null);
  const [person, setPerson] = useState(1);
  const [estimation, setEstimation] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
        <Logo fill="#FFF" width={150} height={150} />
        {isNaN(estimation) ? <Error msg="Veuillez entrer des chiffres" /> : null}
        <Question>Nombre de rouleaux dans votre stock ?</Question>
        <Input
          onChangeText={value => setStock(value)}
          keyboardType="number-pad"
        />
        <Question>Nombre de personnes utilisant votre stock</Question>
        <Input
          onChangeText={value => setPerson(value)}
          keyboardType="number-pad"
        />
        <View style={GlobalStyles.block}>
          <Button
            title="Calculer"
            accessibilityLabel="Calculer combien de temps votre stock va tenir"
            onPress={() => calculus({ stock, person, setEstimation })}
          />
        </View>
        <Estimation days={estimation} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#FFF',
    backgroundColor: '#000',
    alignItems: 'center',
  },
});
