import {View, Text, StyleSheet, FlatList} from "react-native";
import {CATEGORIES, MEALS} from "../data/dummy-data";
import MealItem from "../components/MealItem";
import {useLayoutEffect} from "react";
import MealList from "../components/MealList";

export default function MealOverViewScreen({route, navigation}){
  const catId = route.params.categoryId

  const displayedMeal = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0
  })

  const categoryTitle = CATEGORIES.find(category => category.id === catId).title

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle
    })
  }, [navigation, catId])
  return (
    <MealList list={displayedMeal}/>
  )
}
