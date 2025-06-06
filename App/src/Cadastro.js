import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity  } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Cadastro() {
  const[nome, setNome] = useState('');
  const[email, setEmail] = useState('');
  const[cpf, setCpf] = useState('');
  const[contato, setContato] = useState('');
  const[genero, setGenero] = useState('');
  const[erro, setErro] = useState([]);

  // Função de validar campos do input
  const validarCampos = () => {
    const novosErros = {};
    if(!nome) novosErros.nome = true;
    if(!email.includes('@')) novosErros.email = true;
    if(cpf.length !== 11) novosErros.cpf = true;
    if(contato.length < 8) novosErros.contato = true;
    if(!genero) novosErros.genero = true;
    setErro(novosErros);

    if(Object.keys(novosErros).length === 0) {
      alert("Cadastro feito com sucesso!");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>
      <Text style={styles.subtitulo}>Preencha com seus dados</Text>
      <View style={{ margin: 5 }}>
        <Text>Nome Completo</Text>
        <TextInput 
        style={[styles.input, erro.nome && styles.erroInput]} 
        value={nome}
        onChangeText={setNome}
        placeholder='Digite seu nome'
        />
      </View>
      <View style={{ margin: 5 }}>
        <Text>Email</Text>
        <TextInput 
        style={[styles.input, erro.email && styles.erroInput]} 
        value={email}
        onChangeText={setEmail}
        placeholder='Digite seu email'
        keyboardType='email-address'
        />
      </View>
      <View style={{ margin: 5 }}>
        <Text>CPF</Text>
        <TextInput 
        style={[styles.input, erro.cpf && styles.erroInput]} 
        value={cpf} 
        onChangeText={setCpf} 
        placeholder='Digite seu CPF' 
        keyboardType='numeric'
        />
      </View>
      <View style={{ margin: 5 }}>
        <Text>Contato</Text>
        <TextInput 
        style={[styles.input, erro.contato && styles.erroInput]} 
        value={contato} 
        onChangeText={setContato} 
        placeholder='Digite seu contato' 
        keyboardType='numeric'
        />
      </View>
      <View style={{ margin: 5 }}>
        <Text>Gênero</Text>
        <Picker 
        selectedValue={genero} 
        onValueChange={(itemValue)=> setGenero(itemValue)} 
        style={[{ width: 300, backgroundColor: "#FFF", borderWidth: 1 }, erro.genero && {borderColor: 'red'}]}>
          <Picker.Item label='Selecione' value=""/>
          <Picker.Item label='Masculino' value="Masculino"/>
          <Picker.Item label='Feminino' value="Feminino"/>
          <Picker.Item label='Outro' value="Outro"/>
        </Picker>
      </View>
      <TouchableOpacity style={styles.botao} onPress={validarCampos} activeOpacity={0.7}>
        <Text style={{ fontSize: 17, color: "#000" }}>Cadastre-se</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoLogin} activeOpacity={0.7}>
        <Text style={{ fontSize: 17, color: "#FFF" }}>Faça seu Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#f0f8ff"
  },
  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: "#38C3FF"
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10
  },
  input: {
    width: 300,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "#FFF"
  },
  botao: {
    margin: 5,
    width: 300,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#38C3FF"
  },
  erroInput: {
    borderColor: 'red'
  },
  botaoLogin: {
    margin: 5,
    width: 300,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2783AB'
  }
});