import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity  } from 'react-native';

export default function Cadastro() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Cadastro</Text>
      <View style={{ margin: 5 }}>
        <Text style={{ fontWeight: 'bold' }}>Nome Completo</Text>
        <TextInput style={styles.input} placeholder='Digite seu nome'/>
      </View>
      <View style={{ margin: 5 }}>
        <Text style={{ fontWeight: 'bold' }}>Email</Text>
        <TextInput style={styles.input} placeholder='Digite seu email'/>
      </View>
      <View style={{ margin: 5 }}>
        <Text style={{ fontWeight: 'bold' }}>CPF</Text>
        <TextInput style={styles.input} placeholder='Digite seu CPF' keyboardType='numeric'/>
      </View>
      <View style={{ margin: 5 }}>
        <Text style={{ fontWeight: 'bold' }}>Contato</Text>
        <TextInput style={styles.input} placeholder='Digite seu contato' keyboardType='numeric'/>
      </View>
      <View>
      </View>
      <TouchableOpacity style={styles.botao}>
        <Text style={{fontSize: 15, color: "#FFF"}}>Cadastre-se</Text>
      </TouchableOpacity>
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
  input: {
    width: 300,
    height: 40,
    borderRadius: 5,
    borderWidth: 1
  },
  botao: {
    width: 300,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#292929"
  }
});