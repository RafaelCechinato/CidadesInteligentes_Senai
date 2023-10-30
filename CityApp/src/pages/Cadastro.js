import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { dataURItoBlob } from  './config/utils'

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const uploadImage = async () => {
  if (image) {

    // if(image.uri.includes("base64")){
      
    // }
    

    const formData = new FormData();

    formData.append('file', dataURItoBlob(image.uri));
    formData.append('name', "teste");
    formData.append('email', "teste100@gmail.com");
    formData.append('cpf', "42455435");
    formData.append('password', "42455435");
    
    
    try {
      const response = await axios.post("http://localhost:5000/user", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Resposta da API:', response);
    } catch (error) {
      console.error('Erro ao enviar imagem:', error);
    }
  }
  };


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />}
      <Button title="send" onPress={uploadImage} />
    </View>
  );
}


