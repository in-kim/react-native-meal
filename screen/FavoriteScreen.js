import {View, Text, StyleSheet} from 'react-native'
import MealList from "../components/MealList/List";
import {FavoritesContext} from "../store/context";
import {useContext} from "react";
import {MEALS} from "../data/dummy-data";
export default function FavoriteScreen(){
  const favoriteContext = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter(mealItem => {
    return favoriteContext.isFavoriteId(mealItem.id)
  });

  console.log(favoriteMeals)
  if(!favoriteMeals.length > 0){
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meal yet.</Text>
      </View>
    )
  }

  return (<MealList mealList={favoriteMeals}/>)
}

const styles = StyleSheet.create({
  rootContainer:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'#fff'
  }
})