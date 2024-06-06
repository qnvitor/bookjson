import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'; // Importa StyleSheet do React Native

function LivrosList({ livros }) {
  return (
    <View style={styles.container1}>
      {livros.map((livro, index) => (
        <TouchableOpacity key={index} style={styles.livroContainer}>
          <Image source={{ uri: livro.imagem }} style={styles.livroImagem} />
          <View style={styles.textContainer}>
            <Text style={styles.titulo}>{livro.titulo}</Text>
            <View style={styles.metaContainer}>
              <Text style={styles.nomePessoa}>{livro.nome_pessoa}</Text>
              <Text style={styles.data}>{livro.data}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    padding: 10,
    marginTop: -450,
    backgroundColor: '#ece9e7',
  },
  livroContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  livroImagem: {
    width: 100,
    height: 150,
    borderRadius: 5,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  nomePessoa: {
    marginRight: 10,
  },
  data: {
    marginLeft: 'auto',
  },
});

export default LivrosList;
