import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" options={{ headerShown: false, title: 'Login' }} component={Login} />
          <Stack.Screen name="Cadastro" options={{ headerShown: false}} component={Cadastro} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

