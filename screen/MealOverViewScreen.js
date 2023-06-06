import {View, Text, StyleSheet, FlatList} from "react-native";
import {CATEGORIES, MEALS} from "../data/dummy-data";
import MealItem from "../components/MealItem";
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

  const renderMealItem = ({item}) => {
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration
    }
    return <MealItem {...mealItemProps}/>
  }
  return (
    <View style={styles.container}>
      <FlatList data={displayedMeal} renderItem={renderMealItem} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 16,
  }
})