import react, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  StatusBar,
  Image,
  ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import * as Font from "expo-font";
let customFonts = {
  Louis: require("../../pages/fonts/Louis-George-Cafe.ttf"),
  Montserrat: require("../../pages/fonts/Montserrat-Black.otf"),
  "Montserrat-Bold": require("../../pages/fonts/Montserrat-Bold.otf"),
  "Montserrat-Medium": require("../../pages/fonts/Montserrat-Medium.otf"),
  Numberlin: require("../../pages/fonts/Numberlin.ttf"),
};

export default class Setembro extends react.Component {
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

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    return <Estrutura />;
  }
}

function Estrutura() {
  //Dados para usar no modal
  const [janeiro, setJaneiro] = useState(false);
  return (
    <View>
      <Modal
        visible={janeiro}
        transparent={true}
        animationType={"slide"}
        onRequestClose={() => setJaneiro(false)}
      >
        <View style={style.containerJaneiro}>
          <StatusBar backgroundColor={"#f8f09c"} />
          <Text style={style.textTitleJAN}>Setembro</Text>
          <Text style={style.textBodyJan}>
            Verde é a cor do mês de setembro para a conscientização sobre a
            doação de órgãos e prevenção ao câncer de intestino. Neste mês, a
            data 27 de setembro é o Dia Nacional de Doação de Órgãos e Tecidos.
            Outra cor para o mês de setembro é o amarelo, que tem como objetivo
            a prevenção ao suicídio. Setembro também recebe a cor vermelha para
            a conscientização sobre a prevenção das doenças cardiovasculares.
          </Text>
          <Image
            style={{ width: 200, height: 200 }}
            source={require("../../pages/img/SET_AMARELO.png")}
          />
        </View>
        <TouchableOpacity onPress={() => setJaneiro(false)} style={style.back}>
          <AntDesign name="arrowleft" size={40} color="black" />
        </TouchableOpacity>
      </Modal>
      <TouchableOpacity onPress={() => setJaneiro(true)}>
        <ImageBackground
          style={style.buttonJAN}
          source={require("../../pages/img/Setembro.png")}
        ></ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  containerJaneiro: {
    flex: 1,
    backgroundColor: "#f8f09c",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 20,
  },
  back: {
    position: "absolute",
    marginTop: 30,
    marginLeft: 15,
    zIndex: 20,
  },
  buttonJAN: {
    backgroundColor: 32,
    width: 100,
    height: 100,
    borderRadius: 15,
    elevation: 80,
    shadowColor: "black",
  },
  textTitleJAN: {
    fontFamily: "Numberlin",
    fontSize: 70,
  },
  textBodyJan: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    textAlign: "justify",
    fontFamily: "Montserrat-Medium",
    fontSize: 20,
  },
});
