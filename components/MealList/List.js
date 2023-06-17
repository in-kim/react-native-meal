import {View, Text, StyleSheet, FlatList} from 'react-native';
import MealItem from "../MealItem";
export default function MealList(props){
  const {mealList} = props;
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
      <FlatList data={mealList} renderItem={renderMealItem} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 16,
  }
})