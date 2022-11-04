'use strict';
import { StyleSheet } from 'react-native';

const StationList = StyleSheet.create({
    container: {
        backgroundColor: '#f3f3c5',
    },
    stationItem: {
        borderWidth: 1,
        height: 120,
        flexDirection: "row",
        flex: 1
    },
    stationItemsLeft: {
        backgroundColor: 'pink',
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    stationItemsRight: {
        backgroundColor: '#f3f3c5',
        flex: 3,
        alignItems:'center'
    },
    playerButton: {
       marginTop:20,
    }
});

export default StationList;