import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import api from './config/api'

export default function Login(props) {

    /*async function testeApi(){
        try {
            const response = await api.get("/")
            alert(response.data)
            return "deu certo"
        } catch (error) {
            return error
        }
    }*/

    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <Button 
            onPress={() => props.navigation.navigate('Cadastro',{teste:"AAAAAa"})}
            title="Cadastrar">
            <Text>Cadastrar</Text>
        </Button>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });