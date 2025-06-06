import { View, Text, StyleSheet } from 'react-native';

export default function Resgate() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela Resgate</Text>
      <Text style={styles.descricao}>Aqui oferecemos resgate para animais que sofrem de maus tratos e abandono pelos seus tutores.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#38C3FF"
  },
  descricao: {
    margin: 10,
    textAlign: 'center',
    fontSize: 15,
  }
});