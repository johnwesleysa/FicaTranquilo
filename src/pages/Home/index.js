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
import { Ionicons } from "@expo/vector-icons";

let customFonts = {
  Louis: require("../../pages/fonts/Louis-George-Cafe.ttf"),
  Montserrat: require("../../pages/fonts/Montserrat-Black.otf"),
  "Montserrat-Bold": require("../../pages/fonts/Montserrat-Bold.otf"),
  "Montserrat-Medium": require("../../pages/fonts/Montserrat-Medium.otf"),
  Numberlin: require("../../pages/fonts/Numberlin.ttf"),
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

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }
    return (
      <SafeAreaView style={style.container}>
        <StatusBar backgroundColor="#91e0cc" />
        <Image style={style.logo} source={require("../img/LOGO.png")} />
        <View style={style.box}>
          <Text style={style.textbox}>
            Selecionando o botão laranja você encontrará informações para cada
            mês desejado. Boa navegação!
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#91e0cc",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  help: {
    position: "absolute",
    top: 20,
    right: 20,
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
  textbox: {
    fontFamily: "Montserrat-Medium",
    fontSize: 20,
    color: "white",
    padding: 10,
    textAlign: "justify",
  },
});
