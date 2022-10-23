import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import * as Font from 'expo-font';
import {HindSiliguri_400Regular} from '@expo-google-fonts/hind-siliguri'
import {HomemadeApple_400Regular  } from '@expo-google-fonts/homemade-apple'

let customFonts = {
  'hind-siliguri':  HindSiliguri_400Regular,
  'homemade-apple': HomemadeApple_400Regular,
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
    
      re
    render () {
        if (!this.state.fontsLoaded) {
            return null;
        }
    return (
     
        <View style={style.container}>
            <Text style={style.text}>Fica</Text>
            <Text style={style.text2}>Tranquilo</Text>
        </View>
    )
    }
}

const style = StyleSheet.create ({
    container: {
        backgroundColor: '#d0e4ae',
        flex: 1,
    },
    text: {
        position: 'absolute',
        bottom: 300,
        left: 20,
        fontSize: 50,
        color: '#273117',
        fontFamily: 'Louis-George-Cafe'
        
        
    },
    text2: {
        position: 'absolute',
        bottom: 250,
        left: 50,
        fontSize: 50,
        color: '#273117',
        fontFamily: 'Louis-George-Cafe'
        

    },

})