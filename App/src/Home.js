import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Home!</Text>
      <View style={{ alignItems: 'center', flexDirection: 'row'}}>
        <TouchableOpacity style={styles.botao}>
          <Text style={{ color: "#FFF", fontSize: 20 }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Text style={{ color: "#FFF", fontSize: 20 }}>Cadastre-se</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  botao: {
    margin: 5,
    width: 150,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
