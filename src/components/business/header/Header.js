import { Text, View } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper';
export const Header = ({title='Radio',onMenuPress,onSearchPress}) => {
    return (
        <View>
            <Appbar.Header>
                <Appbar.Action icon="menu" onPress={onMenuPress} />
                <Appbar.Content title={title} />
                <Appbar.Action icon="magnify" onPress={onSearchPress} />
            </Appbar.Header>
        </View>
    )
}