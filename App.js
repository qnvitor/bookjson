import React, { useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'; // Removido StyleSheet do import
import { Feather } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import LivrosList from './LivrosList';
import livros from './livros';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);
  const slides = [
    { title: 'Fantasia', image: require('./assets/img/post-slide-1.jpg') },
    { title: 'Ficção científica', image: require('./assets/img/post-slide-2.jpg') },
    { title: 'Romance', image: require('./assets/img/post-slide-3.jpg') },
    { title: 'Crimes Reais', image: require('./assets/img/post-slide-4.jpg') },
  ];

  const handleProfileClick = () => {
    console.log('Ícone de perfil clicado');
  };

  const handleIndexChanged = (index) => {
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    if (swiperRef.current) {
      const newIndex = (currentIndex + 1) % slides.length;
      if (currentIndex !== slides.length - 1) {
        setCurrentIndex(newIndex);
        swiperRef.current.scrollBy(1);
      } else {
        swiperRef.current.scrollBy(-slides.length + 1);
        setCurrentIndex(0);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Início')}>
          <Image source={require('./assets/img/apple-touch-icon.png')} style={styles.logo} />
          <Text style={styles.logoText}>BookSwap</Text>
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => console.log('Pesquisar')}>
            <Feather name="search" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Adicionar livro para troca')}>
            <Feather name="plus" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleProfileClick}>
            <Feather name="user" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <Swiper
          ref={swiperRef}
          loop={true}
          showsPagination={true}
          paginationStyle={styles.paginationStyle}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          onIndexChanged={handleIndexChanged}
        >
          {slides.map((slide, index) => (
            <View key={index} style={styles.slide}>
              <Image source={slide.image} style={styles.imgBg} resizeMode="cover" />
              <Text style={styles.heading}>{slide.title}</Text>
            </View>
          ))}
        </Swiper>
        <TouchableOpacity onPress={goToNextSlide} style={styles.nextButton}>
          <Feather name="chevron-right" size={32} color="black" />
        </TouchableOpacity>
        <LivrosList livros={livros} />
      </ScrollView>
    </View>
  );
}

// Definindo os estilos manualmente
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#c0a48c',
   
  },
  
  header: {
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
    marginTop:-30,
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
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ece9e7',
  },
  imgBg: {
    width: '100%',
    height: '30%',
    borderRadius: 1,
    marginTop: -480,
    
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  nextButton: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  paginationStyle: {
    marginTop: -480,
  },
  dotStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 5,
  },
  activeDotStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'white',
    marginHorizontal: 5,
  },
};

export default App;
