import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet, FlatList, TextInput } from 'react-native';
import Header from '../components/Header';
import livros from '../data/livros.json';
import Feather from 'react-native-vector-icons/Feather';

const HomeScreen = ({ navigation }) => {
  const [dadosLivros, setDadosLivros] = useState([]);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setDadosLivros(livros);
  }, []);

  const handleSearch = (text) => {
    setSearchText(text);
    const filteredLivros = livros.filter((livro) =>
      livro.titulo.toLowerCase().includes(text.toLowerCase()) ||
      livro.genero.toLowerCase().includes(text.toLowerCase()) ||
      livro.nome_pessoa.toLowerCase().includes(text.toLowerCase())
    );
    setDadosLivros(filteredLivros);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.imagem }} style={styles.itemImage} />
      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>{item.titulo}</Text>
        <Text style={styles.itemText}>{item.nome_pessoa}</Text>
        <Text style={styles.itemText}>Gênero: {item.genero}</Text>
        <Text style={styles.itemText}>Data de Publicação: {item.data}</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL(`https://wa.me/${item.numero}`)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Enviar Mensagem</Text>
          <Feather name="message-circle" size={20} color="#00E500" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        onSearchPress={() => setSearchVisible(!searchVisible)}
      />
      {searchVisible && (
        <TextInput
          style={styles.searchBar}
          placeholder="Buscar..."
          value={searchText}
          onChangeText={handleSearch}
        />
      )}
      <Text style={styles.title}>Anúncios</Text>
      <FlatList
        data={dadosLivros}
        renderItem={renderItem}
        keyExtractor={(item) => item.titulo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0a48c',
    padding: 20,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemImage: {
    width: 100,
    height: 150,
    marginRight: 10,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 5,
  },
  itemText: {
    marginBottom: 5,
  },
  button: {
    marginTop: 10,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#c56648',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default HomeScreen;
