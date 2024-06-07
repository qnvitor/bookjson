import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Header = ({ navigation, onSearchPress, onProfilePress }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={require('../assets/img/apple-touch-icon.png')} style={styles.logo} />
        <Text style={styles.logoText}>BookSwap</Text>
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onSearchPress}>
          <Feather name="search" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AddBook')}>
          <Feather name="plus" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen2')}>
          <Feather name="user" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  logo: {
    width: 40,
    height: 40,
  },
  logoText: {
    marginTop: -30,
    marginRight: 20,
    marginLeft: 50,
    fontSize: 20,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10,
  },
});

export default Header;
