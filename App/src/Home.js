import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={{ margin: 5, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('./Img/Logo.png')}/>
      </View>
      <Text style={styles.titutlo}>Bem-vindo à SafePet!</Text>
      <View style={{ alignItems: 'center', flexDirection: 'row'}}>
        <TouchableOpacity style={styles.botao} activeOpacity={0.6}>
          <Text style={{ color: "#000", fontSize: 17 }}>Saber Mais</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} activeOpacity={0.6}>
          <Text style={{ color: "#000", fontSize: 17 }}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff'
  },
  titutlo: {
    fontSize: 27,
    fontWeight: 'bold',
  },
  botao: {
    margin: 5,
    width: 150,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#38C3FF',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
