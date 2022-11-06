import react, {useState} from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity, StatusBar, Image, ImageBackground} from 'react-native';
import {AntDesign} from '@expo/vector-icons'

import * as Font from 'expo-font';
let customFonts = {
  'Louis': require('../../pages/fonts/Louis-George-Cafe.ttf'),
  'Montserrat': require('../../pages/fonts/Montserrat-Black.otf'),
  'Montserrat-Bold': require('../../pages/fonts/Montserrat-Bold.otf'),
  'Montserrat-Medium': require('../../pages/fonts/Montserrat-Medium.otf'),
  'Numberlin': require('../../pages/fonts/Numberlin.ttf'),
  
};

export default class Fevereiro extends react.Component {
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
    //Definindo os estados que serão usados no modal
    
    render () {
        
        if (!this.state.fontsLoaded) {
            return null;
        }
    
    return (
        <Estrutura/>
    )
}
}

function Estrutura () {

    //Dados para usar no modal
    const [janeiro, setJaneiro] = useState(false)
    return (
    <View>
        <Modal
        visible={janeiro}
        transparent={true}
        animationType={'slide'}
        onRequestClose={() => setJaneiro(false)}
        >
            <View style={style.containerJaneiro}>
                <StatusBar backgroundColor={'#d4b4ed'}/>
                    <Text style={style.textTitleJAN}>
                        Fevereiro
                    </Text>
                    <Text style={style.textBodyJan}>
                    Fevereiro Roxo é o mês de conscientização sobre as doenças: lúpus, fibromialgia e mal de alzheimer. O Fevereiro Laranja, por sua vez, conscientiza sobre a leucemia. 
                    </Text>
                    <Image style={style.imgFEV} source={require('../../pages/img/FEV_ROXO.png')}/>
            </View>
            <TouchableOpacity onPress={() => setJaneiro(false)} style={style.back}>
                <AntDesign name="arrowleft" size={40} color="black" />
            </TouchableOpacity>

        </Modal>
        <TouchableOpacity onPress={() => setJaneiro(true)}>
            <ImageBackground style={style.buttonJAN} source={require('../../pages/img/Fevereiro.png')}>
            </ImageBackground>
        </TouchableOpacity>
    </View>
    )
}


const style = StyleSheet.create ({
    containerJaneiro: {
        flex: 1,
        backgroundColor: '#d4b4ed',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 20,
        
    },
    back: {
        position: 'absolute',
        marginTop: 30,
        marginLeft: 15,
        zIndex: 20,
    },
    buttonJAN:{
        backgroundColor: 32,
        width: 100, 
        height: 100,
        borderRadius: 15,
        elevation: 80,
        shadowColor: 'black'  
    },
    imgFEV: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    textTitleJAN: {
        fontFamily: 'Numberlin', 
        fontSize: 70,
    },
    textBodyJan: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        textAlign: 'justify',
        fontFamily: 'Montserrat-Medium',
        fontSize: 25,
    }
})