import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Keyboard, StyleSheet, Button, Text, View, SafeAreaView, ScrollView } from 'react-native';

import Question from './components/Question';
import Input from './components/Input';
import Estimation from './components/Estimation';
import Error from './components/Error';
import ConsumptionType from './components/ConsumptionType';
import Logo from './utils/Logo';
import GlobalStyles from './utils/globalStyles';

const UNIT_EST = (value) => {
  switch(value) {
    case 1:
      return 7;
    case 2:
      return 5;
    case 3:
      return 2;
    default:
      return 5;
  }
};

export default function App() {
  const [stock, setStock] = useState(null);
  const [person, setPerson] = useState(null);
  const [estimation, setEstimation] = useState(null);
  const [consumption, setConsumption] = useState(2); 

  const calculus = () => {
    if(!stock || !person) return setEstimation(null);
    Keyboard.dismiss();
    const estimation = Math.round(stock * UNIT_EST(consumption) / person);
    setEstimation(estimation.toFixed(0));
  }

  useEffect(() => calculus(), [consumption]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: 25 }} />
      <StatusBar barStyle="light-content"  />
      <ScrollView
        contentContainerStyle={{ flex: 1, alignItems: 'center' }}
        keyboardShouldPersistTaps="always"
      >
        <Logo fill="#FFF" width={150} height={150} />
        {isNaN(estimation) ? <Error msg="Veuillez entrer des chiffres" /> : null}
        <Question>Nombre de rouleaux dans votre stock ?</Question>
        <Input
          onChangeText={value => setStock(value)}
          keyboardType="number-pad"
        />
        <View style={{ height: 25 }} />
        <ConsumptionType active={consumption} setActive={setConsumption} setPerson={setPerson} />
        <View style={GlobalStyles.block}>
          <Button
            title="Calculer"
            accessibilityLabel="Calculer combien de temps votre stock va tenir"
            onPress={() => calculus()}
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
    padding: 5,
    color: '#FFF',
    backgroundColor: '#000',
    alignItems: 'center',
  }
});
