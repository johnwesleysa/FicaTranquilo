import react from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, Ionicons, Feather } from "@expo/vector-icons";

import Home from "./pages/Home";
import MesesStyle from "./component/MesesStyle";
import Contato from "./pages/Contato";
import Meses from "./pages/Meses";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#14202d",
          borderTopColor: "transparent",
          height: 80,
          paddingTop: 20,
          paddingBottom: 20,
        },

        tabBarInactiveTintColor: "white",
        headerShown: false,
        tabBarActiveTintColor: "#34587f",
      }}
    >
      <Tab.Screen
        name="Início"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="md-home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Meses"
        component={Meses}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ size, color }) => (
            <MesesStyle size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Contato"
        component={Contato}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="phone" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
