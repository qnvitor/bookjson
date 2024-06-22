import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, FlatList } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import Header from '../components/Header';

// Importing the books data
import meuslivros from '../data/meuslivros.json';

const AddBookScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [image, setImage] = useState(null);
  const [books, setBooks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    // Initialize books with data from JSON file
    setBooks(meuslivros);
  }, []);

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
        title: title,
        genre: genre,
        year: year,
        image: image,
        author: 'Você', // Placeholder for author
      };

      const fileUri = `${FileSystem.documentDirectory}meuslivros.json`;

      try {
        const fileInfo = await FileSystem.getInfoAsync(fileUri);

        let livros = [];
        if (fileInfo.exists) {
          const fileContent = await FileSystem.readAsStringAsync(fileUri);
          livros = JSON.parse(fileContent);
        } else {
          livros = meuslivros;
        }

        if (isEditing) {
          livros[editIndex] = newBook;
        } else {
          livros.push(newBook);
        }

        await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(livros));

        Alert.alert('Sucesso', `Livro ${isEditing ? 'atualizado' : 'adicionado'} com sucesso!`);
        setTitle('');
        setGenre('');
        setYear('');
        setImage(null);
        setIsEditing(false);
        setEditIndex(null);

        // Update state with the newly added or edited book
        setBooks(livros);
      } catch (error) {
        console.error(error);
        Alert.alert('Erro', 'Não foi possível salvar o livro.');
      }
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  const handleEdit = (index) => {
    const book = books[index];
    setTitle(book.title);
    setGenre(book.genre);
    setYear(book.year);
    setImage(book.image);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = async (index) => {
    const fileUri = `${FileSystem.documentDirectory}meuslivros.json`;

    try {
      const fileInfo = await FileSystem.getInfoAsync(fileUri);

      let livros = [];
      if (fileInfo.exists) {
        const fileContent = await FileSystem.readAsStringAsync(fileUri);
        livros = JSON.parse(fileContent);
      } else {
        livros = meuslivros;
      }

      livros.splice(index, 1);
      await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(livros));

      Alert.alert('Sucesso', 'Livro apagado com sucesso!');
      setBooks(livros);
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível apagar o livro.');
    }
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.bookItem}>
      <Text><Text style={styles.bookProperty}>Título:</Text> {item.title}</Text>
      <Text><Text style={styles.bookProperty}>Gênero:</Text> {item.genre}</Text>
      <Text><Text style={styles.bookProperty}>Ano:</Text> {item.year}</Text>
      {item.image && <Image source={{ uri: item.image }} style={styles.image} />}
      <View style={styles.actionButtons}>
        <TouchableOpacity onPress={() => handleEdit(index)} style={styles.editButton}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(index)} style={styles.deleteButton}>
          <Text style={styles.buttonText}>Apagar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // Filter books with valid data
  const validBooks = books.filter(book => book.title && book.genre && book.year);

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
          <Text style={styles.buttonText}>{isEditing ? 'Atualizar' : 'Enviar'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.booksContainer}>
        <FlatList
          data={validBooks}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.booksList}
        />
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
    marginBottom: 20,
    backgroundColor: '#c56648',
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
    backgroundColor: '#25d366',
    borderRadius: 5,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    alignSelf: 'center',
  },
  booksContainer: {
    flex: 1,
    marginTop: 20,
  },
  booksList: {
    flex: 1,
  },
  bookItem: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  bookProperty: {
    fontWeight: 'bold',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: '#f0ad4e',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: '#d9534f',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginLeft: 5,
  },
});

export default AddBookScreen;
