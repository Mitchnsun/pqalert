import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { View, Text, Button } from 'react-native';

import GlobalStyles from '../utils/globalStyles';
import notify from '../utils/notify';

const MOMENT_FORMAT = 'dddd D MMMM';

const Estimation = ({ days }) => {
  moment.locale('fr');
  const [saveNotify, setSaveNotify] = useState(false);
  useEffect(() => setSaveNotify(false), [days]);

  if(!days || isNaN(days)) return null;

  return (
    <View>
      <Text style={[GlobalStyles.text, { fontSize: 25, height: 50 }]}>
        {`Vous pouvez tenir ${days} jour(s)`}
      </Text>
      <Text style={GlobalStyles.text}>
        {`Mettre un rappel pour le ${moment().add(days, 'days').format(MOMENT_FORMAT)}`}
      </Text>
      <Button
        title={`Mettre un rappel dans ${days} jour(s)`}
        accessibilityLabel="Mettre un rappel pour la date de fin du stock"
        onPress={() => setSaveNotify(notify({ days }))}
        color={saveNotify ? '#70d15c' : '#e64b09'}
      />
    </View>
  );
};

export default Estimation;