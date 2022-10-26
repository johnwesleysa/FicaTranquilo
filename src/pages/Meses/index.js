import react from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import MesesModal from '../../component/MesesModal';
export default function Meses () {

    

    return (
        <SafeAreaView  style={style.container}>
                <StatusBar backgroundColor={'#d0e4ae'}/>
            <MesesModal/>
        </SafeAreaView>
    )
}

const style = StyleSheet.create ({
    container: {
        backgroundColor: '#d0e4ae',
        flex: 1,
    },
})