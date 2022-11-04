import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, IconButton, ProgressBar } from 'react-native-paper';
import { indianRadioStations } from '../utils/mockStations'
import { Audio } from 'expo-av';
import styles from '../styles/screens/stationlist.styles';


export default function StationList() {

  const [loader,setLoading] = useState(false);
  const [pauseEnabled,setPause]= useState(false);
  const [selectedId,setRadioId] = useState('');
  const [sound,setSound] = useState();


  const playSound = async(id,url) => {
    setRadioId(id)
    setLoading(true)
    setPause(true);
    const { sound } = await Audio.Sound.createAsync({uri:url,downloadAsync:true});
    debugger
    setSound(sound);
    setLoading(false);
    await sound.playAsync();
  }

  const pauseSound =async (id) => {
    setRadioId(id)
    setLoading(true)
    setPause(false);
    await sound.pauseAsync();
    setLoading(false)
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const renderStations = indianRadioStations.map(({ radio_name, radio_image, radio_url, radio_id }) => {
    return <View style={styles.stationItem} key={radio_id}>
      <View style={styles.stationItemsLeft}><Avatar.Image size={100} source={{ uri: radio_image }} /></View>
      <View style={styles.stationItemsRight}>
        <Text>{radio_name}</Text>
        <View style={styles.playerButton}>
        <IconButton
          icon={selectedId===radio_id&&pauseEnabled?'pause':'play'}
          size={30}
          containerColor={'gray'}
          onPress={selectedId===radio_id&&pauseEnabled?()=>pauseSound(radio_id):()=>playSound(radio_id,radio_url)}
        />
        </View>
      </View>
    </View>
  })

  return (
    <SafeAreaView style={styles.container}>
      <Text>{selectedId}</Text>
      <ProgressBar indeterminate={true}  visible={loader}/>
      <ScrollView >
        {renderStations}
      </ScrollView>
    </SafeAreaView>
  )
}