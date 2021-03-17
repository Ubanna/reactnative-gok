import React from "react";
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// screens
import Home from "../screens/Home"
import Settings from "../screens/Settings"
import Explore from "../screens/Explore"
import Profile from "../screens/Profile"
import DrawerContent from "../components/DrawerContent"


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();


const Tabs = ({ navigation }) => {
    return (
        <Tab.Navigator
        // initialRouteName="Screens"
        activeColor="#DB222A"
        barStyle={{ backgroundColor: "#fff" }}
        >
            <Tab.Screen
            options={{
                tabBarLabel: "Home",
                tabBarIcon: ({ color }) => (
                    <FontAwesome5 name="home" color={color} 
                    size={22} 
                    />
                ),
            }}
            name="Home"
            component={Home}
            />
              <Tab.Screen
          name="Explore"
          options={{
            tabBarLabel: "Explore",
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="search" color={color} 
              size={22} 
              />
            ),
          }}
          component={Explore}
        />
        </Tab.Navigator>
    )
}

const Screens = ({ navigation, route }) => {
    return (
        <Stack.Navigator
        // mode="modal"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#DB222A',
          },
          headerTintColor: '#fff',
        }}
        >
           <Stack.Screen
          options={({ route }) => ({
            headerTintColor: "#fff",
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Feather
                  name="menu"
                  size={22}
                  color="#fff"
                  style={{ paddingHorizontal: 15 }}
                />
              </TouchableOpacity>
            ),
          })}
          name="Tabs"
        >
          {(props) => <Tabs {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Settings">
          {(props) => <Settings {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Profile">
          {(props) => <Profile {...props} />}
        </Stack.Screen>
        </Stack.Navigator>
    )
}

export default () => {
    return (
        <Drawer.Navigator
        // drawerType="slide"
        contentContainerStyle={{ flex: 1 }}
        drawerContent={props => <DrawerContent {...props} /> }
        >
            <Drawer.Screen name="Screens">
          {(props) => <Screens {...props} />}
        </Drawer.Screen>
        </Drawer.Navigator>
    )
}





































