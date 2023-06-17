import {View, Text, StyleSheet} from "react-native";
import {useSelector} from "react-redux";
import MealList from "../components/MealList";
import {MEALS} from "../data/dummy-data";
export default function FavoriteScreen(){
  const favorites = useSelector(state => state.favoriteMeals.ids);
  const mealList = MEALS.filter(mealItem => {
    return favorites.includes(mealItem.id);
  });
  if(!mealList.length > 0){
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>좋아하는 음식이 없습니다.</Text>
      </View>
    )
  }

  return (
    <MealList list={mealList}/>
  )
}

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'white'
  }
})