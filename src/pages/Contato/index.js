import react from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default function Contato () {
    return (
        <View style={style.container}>
            <Text style={style.text}>Página Contato</Text>
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