// HomeScreen2.js
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import userInfo from '../userInfo'; // Importe o objeto userInfo do arquivo userInfo.js
import reviewInfo from '../reviewInfo';
import Header from '../components/Header';

const HomeScreen2 = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
      <Header navigation={navigation}/>
      <View style={styles.cards}>
        <Image source={require('../assets/profile_image.png.jpg')} style={styles.profileImage} />
        <Text style={styles.title}>Perfil do Usuário</Text>
        <View style={styles.userInfo}>
          <Text style={styles.userInfoText}>Nome: {userInfo.name}</Text>
          <Text style={styles.userInfoText}>Email: {userInfo.email}</Text>
          <Text style={styles.userInfoText}>Idade: {userInfo.age}</Text>
          <Text style={styles.userInfoText}>Cidade: {userInfo.city}</Text>
          <Text style={styles.userInfoText}>País: {userInfo.country}</Text>
          <Text style={styles.userInfoText}>Gênero Favorito: {userInfo.favoriteGenre}</Text>
        </View>
        <View style={styles.reviewInfo}>
          <Text style={styles.reviewInfoText}>{reviewInfo.nome}</Text>
          <Text style={styles.reviewInfoText}>Nota: {reviewInfo.nota_da_troca}</Text>
          <Text style={styles.reviewInfoText}>{reviewInfo.comentario}</Text>
        </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#c0a48c',
    padding: 20,
  },
  cards: {
    alignItems: 'center',
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  profileImage: {
    paddingTop: 25,
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 25,
  },
  userInfo: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%',
  },
  userInfoText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#000',
  },
  reviewInfo: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%',
  },
  reviewInfoText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#000',
  },
});

export default HomeScreen2;
