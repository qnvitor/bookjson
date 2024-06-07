import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as FileSystem from 'expo-file-system';
import Header from '../components/Header';

const ProfileScreen = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Carregar as informações do usuário
    FileSystem.readAsStringAsync(`${FileSystem.documentDirectory}userinfo.json`)
      .then(data => {
        setUserInfo(JSON.parse(data));
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Carregando informações do usuário...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Erro ao carregar informações do usuário: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Usuário</Text>
      {userInfo ? (
        <View style={styles.userInfo}>
          <Text style={styles.userInfoText}>Nome: {userInfo.name}</Text>
          <Text style={styles.userInfoText}>Email: {userInfo.email}</Text>
          <Text style={styles.userInfoText}>Idade: {userInfo.age}</Text>
          <Text style={styles.userInfoText}>Cidade: {userInfo.city}</Text>
          <Text style={styles.userInfoText}>País: {userInfo.country}</Text>
          <Text style={styles.userInfoText}>Gênero Favorito: {userInfo.favoriteGenre}</Text>
        </View>
      ) : (
        <Text style={styles.noDataText}>Nenhuma informação do usuário encontrada.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userInfo: {
    marginBottom: 20,
  },
  userInfoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  loadingText: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
  noDataText: {
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default ProfileScreen;
