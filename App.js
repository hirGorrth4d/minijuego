import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


export default function App() {
  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf')
  })
  const [userNumber, setUserNumber] = useState()
  const handlerStartGame = selectedNumber =>{
    setUserNumber(selectedNumber)
  }
  if (!loaded) return <AppLoading />
  let content = <StartGameScreen onStartGame={handlerStartGame} />
  if (userNumber) {
    content = <GameScreen />
  }

  return (
    <View style={styles.screen}>
      <Header title={'Adivina el numero'}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
});
