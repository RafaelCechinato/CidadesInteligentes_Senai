import { StatusBar } from 'expo-status-bar';
import { useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Cadastro(props) {
  const [valor, setValue] = useState(props.route.params.teste)


    return (
      <View style={styles.container}>
        <Text>Cadastro</Text>
        <Text>{valor}</Text>
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