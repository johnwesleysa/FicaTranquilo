import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import * as Font from 'expo-font';

let customFonts = {
  'Louis-George-Cafe': require('../fonts/Louis-George-Cafe.ttf')
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
        backgroundColor: '#d0e4ae',
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
        color: '#273117',
        fontFamily: 'Louis-George-Cafe'
    },
    text2: {
        marginLeft: 30,
        fontSize: 55,
        color: '#273117',
        fontFamily: 'Louis-George-Cafe'
    },
    box: {
        width: 350,
        top: 490,
        left: 20,
        right: 20,
        position: 'absolute',
        backgroundColor: '#d0e4ae',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        shadowColor: 'black'
    },
    textbox: {
        fontFamily: 'Louis-George-Cafe',
        fontSize: 25,
        color: '#273117',
        padding: 10,
        textAlign: 'justify',
    },

})