import react from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';

export default function Meses () {

    return (
        <SafeAreaView  style={style.container}>
            <View style={style.boxtitle}>
                <Text style={style.title}>Selecione o mês</Text>
                
            </View>
        
        </SafeAreaView>
    )
}

const style = StyleSheet.create ({
    container: {
        flex: 1,
    },
    boxtitle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold'
    }
})