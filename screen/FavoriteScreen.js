import {View, Text} from 'react-native'
import MealList from "../components/MealList/List";
import {FavoritesContext} from "../store/context";
import {useContext} from "react";
import {MEALS} from "../data/dummy-data";
export default function FavoriteScreen(){
  const favoriteContext = useContext(FavoritesContext);
  const favoriteList = MEALS.filter(mealItem => {
    return favoriteContext.isFavoriteId(mealItem.id)
  });
  return (<MealList mealList={favoriteList}/>)
}