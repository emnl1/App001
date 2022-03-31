import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Image} from 'react-native';
import { Dimensions, View } from 'react-native-web';

import header from './assets/bloconotas.png';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function App() {
  return (
   
    <SafeAreaView>
      <View style={styles.headerView}>
          <Image source={header} style={styles.header}></Image>
          <Text style={styles.title}>Bloco de Notas</Text>
      </View>

      <View style={styles.detailsView}>
          <Text style={styles.productName}>Notas</Text>
      </View>

      <View style={styles.detailsContainer}>
          <Image style={styles.icon} source={{uri: 'https://s.manualdousuario.net/wp-content/uploads/2021/03/bloco-de-notas-novo-icone.png'}}></Image>
          <Text style={styles.blocoName}>Bloco</Text>
      </View>

      <View>
        <Text>Suas Notas</Text>
        
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  detailsView: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  headerView: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header:{
    width: '100%',
    height: 350,
  },

  Tile:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#6b5b95',
    paddingTop: 40,
    position: 'absolute',
    textAlign: 'center',
    width: '100%'
  },

  productName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#6b5b95',
    textAlign: 'center',
    width: '100%',
  },

  Icon:{
    width: 32,
    height: 32,
  },

  blocoName: {
    fontSize: 15,
    color: '#6b5b95',
    marginLeft: 20,
    lineHeight: 10,
    paddingTop: 10,
  },

  detailsContainer: {
    padding: 20,
    flexDirection: 'row'
  }
});
