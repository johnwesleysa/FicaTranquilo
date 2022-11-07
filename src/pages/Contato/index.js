import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
} from "react-native";
import * as Font from "expo-font";

let customFonts = {
  Louis: require("../../pages/fonts/Louis-George-Cafe.ttf"),
  Montserrat: require("../../pages/fonts/Montserrat-Black.otf"),
  "Montserrat-Bold": require("../../pages/fonts/Montserrat-Bold.otf"),
  "Montserrat-Medium": require("../../pages/fonts/Montserrat-Medium.otf"),
  Numberlin: require("../../pages/fonts/Numberlin.ttf"),
};

export default class Contato extends React.Component {
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

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }
    return (
      <View style={style.container}>
        <StatusBar backgroundColor={"#91e0cc"} />
        <Image style={style.logo} source={require("../img/LOGO.png")} />
        <View style={style.box}>
          <View style={style.box2}>
            <Text style={style.text1}>SOS'S PARA CONTATO</Text>
            <Text style={style.text2}>Ambulância (SAMU): 192</Text>
            <Text style={style.text2}>
              Equipe Multidisciplinar: (00) 90000-0000
            </Text>
            <Text style={style.text3}>
              Nossa equipe multidisciplinar é composta de: fisioterapeutas,
              médicos, enfermeiros, nutricionistas, fonoaudiólogos e outros
              especialistas.
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#91e0cc",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
  logo: {
    width: 300,
    height: 300,
    bottom: 20,
  },
  box: {
    marginLeft: 20,
    marginRight: 20,
    shadowColor: "black",
    elevation: 20,
    backgroundColor: "#173f5f",
    borderRadius: 15,
  },
  box2: {
    padding: 20,
  },
  text1: {
    fontFamily: "Montserrat-Medium",
    fontSize: 20,
    color: "white",
  },
  text2: {
    marginTop: 20,
    fontFamily: "Louis",
    fontSize: 15,
    color: "white",
  },
  text3: {
    marginTop: 20,
    fontFamily: "Louis",
    fontSize: 15,
    textAlign: "justify",
    color: "white",
  },
});
