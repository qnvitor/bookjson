import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import Header from '../components/Header';

const AddBookScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [image, setImage] = useState(null);

  const takePhoto = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === 'granted') {
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    }
  };

  const handleSubmit = async () => {
    if (title && genre && year) {
      const newBook = {
        titulo: title,
        genero: genre,
        data: year,
        imagem: image,
        nome_pessoa: 'Você',
        numero: '0000000000' // Placeholder for the phone number
      };

      const fileUri = `${FileSystem.documentDirectory}meuslivros.json`;

      try {
        const fileInfo = await FileSystem.getInfoAsync(fileUri);

        let livros = [];
        if (fileInfo.exists) {
          const fileContent = await FileSystem.readAsStringAsync(fileUri);
          livros = JSON.parse(fileContent);
        }

        livros.push(newBook);
        await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(livros));

        Alert.alert('Sucesso', 'Livro adicionado com sucesso!');
        setTitle('');
        setGenre('');
        setYear('');
        setImage(null);
      } catch (error) {
        console.error(error);
        Alert.alert('Erro', 'Não foi possível salvar o livro.');
      }
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Nome do Livro"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Gênero"
        value={genre}
        onChangeText={setGenre}
      />
      <TextInput
        style={styles.input}
        placeholder="Ano de Publicação"
        value={year}
        onChangeText={setYear}
      />
      <TouchableOpacity onPress={takePhoto} style={styles.button}>
        <Text style={styles.buttonText}>Tirar Foto</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0a48c',
    padding: 20,
  },
  form: {
    paddingTop: 20,
  },
  logoText: {
    fontSize: 20,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    padding: 10,
    backgroundColor: '#25d366',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  submitButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#1E90FF',
    borderRadius: 5,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    alignSelf: 'center',
  },
});

export default AddBookScreen;
