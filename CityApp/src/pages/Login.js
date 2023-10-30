import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Login(props) {


    function callback(data) {
      if(data.didCancel) {
        return;
      }
      if(data.error) {
        return;
      }
      if(!data.uri) {
        return;
      }
      setImage(data)
    }

    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <Button title='Teste' onPress={() => ImagePicker.launchImageLibrary({}, callback)} />
        <Button 
            onPress={() => props.navigation.navigate("Cadastro")}
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