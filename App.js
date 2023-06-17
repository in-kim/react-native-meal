import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import CategoriesScreen from "./screen/CategoriesScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator} from "@react-navigation/drawer";
import MealOverViewScreen from "./screen/MealOverViewScreen";
import MealDetailScreen from "./screen/MealDetailScreen";

import {Ionicons} from "@expo/vector-icons";
import FavoriteScreen from "./screen/FavoriteScreen";
import {store} from "./store";
import {Provider} from "react-redux";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation(){
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: {backgroundColor: '#351401'},
      headerTintColor: 'white',
      sceneContainerStyle:{backgroundColor: '#3f2f25'},
      drawerContentStyle:{ backgroundColor: '#3f2f25'},
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#e4baa1',
    }}>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title:'All categories',
          drawerIcon: ({ size, color}) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ size, color}) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {backgroundColor: '#351401'},
          headerTintColor: 'white',
          contentStyle: {backgroundColor: '#3f2f25'}
        }}>
          <Stack.Screen
            name="MealsCategories"
            component={DrawerNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="MealOverView" component={MealOverViewScreen} />
          <Stack.Screen name="MealDetailView" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
