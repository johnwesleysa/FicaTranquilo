import react from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import MesesModal from "../../component/MesesModal";
export default function Meses() {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={"#62a6ed"} />
      <MesesModal />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#62a6ed",
    flex: 1,
  },
});
