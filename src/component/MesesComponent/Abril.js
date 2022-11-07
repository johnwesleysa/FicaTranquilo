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

export default class Abril extends react.Component {
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
          <StatusBar backgroundColor={"#62a6ed"} />
          <Text style={style.textTitleJAN}>Abril</Text>
          <Text style={style.textBodyJan}>
            Abril Verde significa a conscientização sobre a importância da
            segurança no trabalho. O mês também é chamado de Abril Azul para
            trazer o debate sobre o autismo, que tem a data 02.04 como o Dia
            Mundial da Conscientização do Autismo.
          </Text>
          <Image
            style={{ marginTop: 20, width: 200, height: 200 }}
            source={require("../../pages/img/ABRIL_AUTISM.png")}
          />
        </View>
        <TouchableOpacity onPress={() => setJaneiro(false)} style={style.back}>
          <AntDesign name="arrowleft" size={40} color="black" />
        </TouchableOpacity>
      </Modal>
      <TouchableOpacity onPress={() => setJaneiro(true)}>
        <ImageBackground
          style={style.buttonJAN}
          source={require("../../pages/img/abril.png")}
        ></ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  containerJaneiro: {
    flex: 1,
    backgroundColor: "#62a6ed",
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
    fontSize: 25,
  },
});
