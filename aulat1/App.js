import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Button, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-web';

export default function App() {
  return (
   
    <SafeAreaView>
      <Text>Bloco de Notas</Text>
      <Image
     
        source={require('./assets/favicon.png')}
      />




    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
