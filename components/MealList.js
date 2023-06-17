import MealItem from "./MealItem";
import {FlatList, StyleSheet, View} from "react-native";

export default function MealList(props){
  const {list} = props;
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
      <FlatList
        data={list}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 16,
  }
})