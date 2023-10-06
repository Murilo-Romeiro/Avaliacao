import React from 'react';
import { View, Button } from 'react-native';

function Home({ navigation }) {
  return (
    <View>
      <Button
        title="Agendar Consulta"
        onPress={() => navigation.navigate('Agendamento')
   }
      />
      <Button
        title="Consultar Pacientes Agendados"
        onPress={() => navigation.navigate('Consulta')}
      />
    </View>
  );
}

export default Home;