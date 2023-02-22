import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

function ArtScreen({ }) {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/art.png')} style={styles.image}/>
    </View>
  )
}

function MileScreen({ }) {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/mile.png')} style={styles.image}/>
    </View>
  )
}

function NavyScreen({ }) {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/pier.png')} style={styles.image}/>
    </View>
  )
}

function WaterScreen({ }) {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/water.png')} style={styles.image}/>
    </View>
  )
}

function WillisScreen({ }) {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/willis.png')} style={styles.image} />
    </View>
  )
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name="Art Institute of Chicago" component={ArtScreen} />
        <Drawer.Screen name="Magnificent Mile" component={MileScreen} />
        <Drawer.Screen name="Navy Pier" component={NavyScreen} />
        <Drawer.Screen name="Water Tower" component={WaterScreen} />
        <Drawer.Screen name="Willis Tower" component={WillisScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 480,
    width: 320,
  },
});
