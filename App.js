import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import CategoriesScreen from "./screen/CategoriesScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealOverViewScreen from "./screen/MealOverViewScreen";
import MealDetailScreen from "./screen/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {backgroundColor: '#351401'},
          headerTintColor: 'white',
          contentStyle: {backgroundColor: '#3f2f25'}
        }}>
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
              contentStyle: {backgroundColor: '#fff'}
            }}
          />
          <Stack.Screen name="MealOverView" component={MealOverViewScreen} />
          <Stack.Screen name="MealDetailView" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
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
