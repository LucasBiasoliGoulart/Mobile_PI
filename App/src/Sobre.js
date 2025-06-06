import { View, Text, StyleSheet } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre a SafePet</Text>
      <Text style={styles.description}>A SafePet foi criada para ajudar os animais que foram abandonados e os que sofreram maus tratos pelos seus tutores.</Text>
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
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#38C3FF"
  },
  description: {
    margin: 10,
    fontSize: 16,
    textAlign: 'justify',
    marginTop: 10,
  },
});
