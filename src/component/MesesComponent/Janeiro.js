import react, {useState} from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity, StatusBar, ImageBackground, Image} from 'react-native';
import {AntDesign} from '@expo/vector-icons'

import * as Font from 'expo-font';
let customFonts = {
  'Louis': require('../../pages/fonts/Louis-George-Cafe.ttf'),
  'Montserrat': require('../../pages/fonts/Montserrat-Black.otf'),
  'Montserrat-Bold': require('../../pages/fonts/Montserrat-Bold.otf'),
  'Montserrat-Medium': require('../../pages/fonts/Montserrat-Medium.otf'),
  'Numberlin': require('../../pages/fonts/Numberlin.ttf'),
};

export default class Janeiro extends react.Component {
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
                <StatusBar backgroundColor={'white'}/>
                    <Text style={style.textTitleJAN}>
                        Janeiro
                    </Text>
                    <Text style={style.textBodyJan}>
                    Janeiro Branco é um alerta sobre a saúde mental. A campanha visa demonstrar a importância que cuidar da saúde não significa apenas cuidar da saúde do corpo. Cuidar da mente também é fundamental para o total bem-estar e equilíbrio entre corpo e mente.   
                    </Text>
                    <Image style={style.imgJAN} source={require('../../pages/img/SAUDE_MENTAL_JAN.png')}/>
            </View>
            <TouchableOpacity onPress={() => setJaneiro(false)} style={style.back}>
                <AntDesign name="arrowleft" size={40} color="black" />
            </TouchableOpacity>

                
            

        </Modal>
        
        <TouchableOpacity onPress={() => setJaneiro(true)} style={{borderRadius:15,}}>
            <ImageBackground style={style.buttonJAN} source={require('../../pages/img/janeiro.png')}>
            </ImageBackground>
        </TouchableOpacity>
    </View>
    )
}


const style = StyleSheet.create ({
    containerJaneiro: {
        flex: 1,
        backgroundColor: 'white',
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
    imgJAN: {
        
        
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
    }, img : {
        position: 'absolute',
        width: 100, height: 100,
        
    }
})