import {FlatList, StyleSheet} from "react-native";
import CategoryGridTIle from "../components/CategoryGridTile";
import {CATEGORIES} from "../data/dummy-data";
export default function CategoriesScreen({navigation}){

  const renderCategoryItem = ({item}) =>{
    const pressHandler = () =>{
      navigation.navigate('MealOverView', {categoryId : item.id});
    }

    return (
      <CategoryGridTIle title={item.title} color={item.color} onPress={pressHandler}/>
    )
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  )
}
