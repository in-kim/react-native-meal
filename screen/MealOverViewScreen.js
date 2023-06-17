import {CATEGORIES, MEALS} from "../data/dummy-data";
import MealList from "../components/MealList/List";
import {useLayoutEffect} from "react";

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

  return (<MealList mealList={displayedMeal}/>)
}