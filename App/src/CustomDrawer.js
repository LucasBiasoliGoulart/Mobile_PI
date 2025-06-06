import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function CustomDrawer(props) {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('./Img/Logo.png')} style={{ width: 200 }}/>
      </View>
      <Text style={styles.titulo}>Menu</Text>
      {props.state.routes.map((route, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => props.navigation.navigate(route.name)}
        >
          <Text style={styles.buttonText}>{route.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    padding: 20,
  },
  titulo: {
    fontSize: 27,
    marginTop: 10,
    marginBottom: 10
  },
  button: {
    padding: 10,
    backgroundColor: '#38C3FF',
    borderRadius: 5,
    marginVertical: 5
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
});
