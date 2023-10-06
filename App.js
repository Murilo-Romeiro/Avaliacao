
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Agendamento from './screens/Agendamento';
import Consulta from './screens/Consulta';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Agendamento" component={Agendamento} />
        <Stack.Screen name="Consulta" component={Consulta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
