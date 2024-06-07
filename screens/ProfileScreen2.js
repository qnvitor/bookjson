import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as FileSystem from 'expo-file-system';
import Header from '../components/Header';

const ProfileScreen2 = () => {
  const [reviewInfo, setReviewInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Carregar as informações do usuário
    FileSystem.readAsStringAsync(`${FileSystem.documentDirectory}reviewInfo.js`)
      .then(data => {
        setReviewInfo(JSON.parse(data));
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
        <Text style={styles.loadingText}>Carregando informações da review...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Erro ao carregar informações da review: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleReview}>Avaliações</Text>
      {reviewInfo ? (
        <View style={styles.reviewInfo}>
          <Text style={styles.reviewInfoText}>{reviewInfo.nome}</Text>
          <Text style={styles.reviewInfoText}>Nota: {reviewInfo.nota_da_troca}</Text>
          <Text style={styles.reviewInfoText}>{reviewInfo.comentario}</Text>
        </View>
      ) : (
        <Text style={styles.noDataText}>Nenhuma informação de review encontrada.</Text>
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
  reviewInfo: {
    marginBottom: 20,
  },
  reviewInfoText: {
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

export default ProfileScreen2;
