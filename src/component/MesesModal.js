import react, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from "react-native";
import Janeiro from "./MesesComponent/Janeiro";
import Fevereiro from "./MesesComponent/Fevereiro";
import Marco from "./MesesComponent/Marco";
import Abril from "./MesesComponent/Abril";
import Maio from "./MesesComponent/Maio";
import Junho from "./MesesComponent/Junho";
import Julho from "./MesesComponent/Julho";
import Agosto from "./MesesComponent/Agosto";
import Setembro from "./MesesComponent/Setembro";
import Outubro from "./MesesComponent/Outubro";
import Novembro from "./MesesComponent/Novembro";
import Dezembro from "./MesesComponent/Dezembro";

//fontes usadaa
import * as Font from "expo-font";
let customFonts = {
  Louis: require("../pages/fonts/Louis-George-Cafe.ttf"),
  Montserrat: require("../../src/pages/fonts/Montserrat-Black.otf"),
  "Montserrat-Bold": require("../../src/pages/fonts/Montserrat-Bold.otf"),
  "Montserrat-Medium": require("../../src/pages/fonts/Montserrat-Medium.otf"),
  Numberlin: require("../../src/pages/fonts/Numberlin.ttf"),
};

export default class MesesModal extends react.Component {
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

    return (
      <View style={style.container}>
        <StatusBar backgroundColor={"#91e0cc"} />
        <View style={style.boxmeses}>
          <Text style={style.title}>Selecione um Mês</Text>
        </View>
        <MesesM />
      </View>
    );
  }
}

function MesesM() {
  return (
    <View style={style.containerMeses}>
      <View style={style.meses}>
        <Janeiro />
      </View>
      <View style={style.meses}>
        <Fevereiro />
      </View>
      <View style={style.meses}>
        <Marco />
      </View>
      <View style={style.meses}>
        <Abril />
      </View>
      <View style={style.meses}>
        <Maio />
      </View>
      <View style={style.meses}>
        <Junho />
      </View>
      <View style={style.meses}>
        <Julho />
      </View>
      <View style={style.meses}>
        <Agosto />
      </View>
      <View style={style.meses}>
        <Setembro />
      </View>
      <View style={style.meses}>
        <Outubro />
      </View>
      <View style={style.meses}>
        <Novembro />
      </View>
      <View style={style.meses}>
        <Dezembro />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#91e0cc",
    flex: 1,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    elevation: 20,
  },
  title: {
    fontSize: 35,
    fontFamily: "Montserrat-Medium",
    padding: 20,
    color: "black",
  },
  boxmeses: {
    marginTop: 30,
    marginBottom: 30,
  },
  containerMeses: {
    flex: 2,
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  meses: {
    padding: 10,
  },
});
