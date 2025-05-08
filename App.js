import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
   /*  <ImageBackground source={{
      uri:
        'https://img.freepik.com/fotos-gratis/plano-de-fundo-de-programacao-com-pessoa-trabalhando-com-codigos-no-computador_23-2150010125.jpg?t=st=1746665755~exp=1746669355~hmac=ac7dee82b65a655caca19e7665b73f47c0c418e78fbec842cbf35259f6b10557&w=996'
    }} > */
      <View style={styles.container}>
        <Text style={styles.title}> Sistemas{'\n'} Operacionais </Text>
        <StatusBar style="auto" />
      </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 25,
    fontWeight: 'bold'
  }
});
