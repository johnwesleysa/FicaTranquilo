import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image, StatusBar} from 'react-native';
import * as Font from 'expo-font';

let customFonts = {
  'Louis': require('../../pages/fonts/Louis-George-Cafe.ttf'),
    'Montserrat': require('../../pages/fonts/Montserrat-Black.otf'),
    'Montserrat-Bold': require('../../pages/fonts/Montserrat-Bold.otf'),
    'Montserrat-Medium': require('../../pages/fonts/Montserrat-Medium.otf'),
    'Numberlin': require('../../pages/fonts/Numberlin.ttf'),
};

export default class Home extends React.Component {
    state = {
        fontsLoaded: false,
      };
    
      async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
      }
    
      componentDidMount() {
        this._loadFontsAsync();
      }
    
    render () {
        if (!this.state.fontsLoaded) {
            return null;
        }
    return (
     
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor='#62a6ed'/>
            <Image style={style.image}
            source={require('../img/homepage.png')}
            />
            <View style={style.titles}>
                <Text style={style.text}>Fica</Text>
                <Text style={style.text2}>Tranquilo</Text>
            </View>
            <View style={style.box}>
                <Text style={style.textbox}>
                    Selecionando o botão laranja você encontrará informações para cada mês desejado. Boa navegação!
                </Text>
            </View>
        </SafeAreaView>
    )
    }
}

const style = StyleSheet.create ({
    container: {
        backgroundColor: '#62a6ed',
        flex: 1,
    },
    image: {
        width:200,
        height: 200,
        position: 'absolute',
        right:30,
        top: 50
    },
    titles: {
        width: 300,
        position: 'absolute',
        bottom:320,
        left: 20
    },
    text: {
        fontSize: 55,
        color: 'black',
        fontFamily: 'Louis-George-Cafe'
    },
    text2: {
        marginLeft: 30,
        fontSize: 55,
        color: 'black',
        fontFamily: 'Louis-George-Cafe'
    },
    box: {
        width: 350,
        top: 450,
        left: 20,
        right: 20,
        position: 'absolute',
        backgroundColor: '#62a6ed',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        shadowColor: 'black',
        borderRadius: 15
    },
    textbox: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 25,
        color: 'black',
        padding: 10,
        textAlign: 'justify',
    },

})