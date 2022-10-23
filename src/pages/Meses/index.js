import react from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Meses () {
    return (
        <View style={style.container}>
            <Text style={style.text}>Página Meses</Text>
        </View>
    )
}

const style = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold'
    }
})