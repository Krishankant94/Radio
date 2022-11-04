import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    try{
    const { sound } = await Audio.Sound.createAsync({uri:'http://air.pc.cdn.bitgravity.com/air/live/pbaudio001/playlist.m3u8',downloadAsync:true});
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
    }catch(error){
      console.log('error while playing ',error)
    }
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View >
      <Button title="Play Sound" onPress={playSound} />
    </View>
  );
}


