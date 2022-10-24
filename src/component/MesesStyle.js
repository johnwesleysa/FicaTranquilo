import React from "react";
import {View, StyleSheet} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function MesesStyle ({size, color}) {
    return (
            <View style={style.container}>
                <FontAwesome5 style={style.meses}name='calendar-check' size={size} color={color} label='meses'/>
                
            </View>
    )
}

const style = StyleSheet.create ({
    container: {
        
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#c78410',
        width: 100,
        height: 100,
        borderRadius: 100,
        marginBottom: 30,
    },
})