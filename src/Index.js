import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Intro from './screens/Intro';
import StationList from './screens/StationList';
import Player from './screens/Player';

export default class Index extends Component {
  render() {
    return (
      <View>
        {/* <Intro /> */}
        <StationList />
        {/* <Player /> */}
      </View>
    )
  }
}