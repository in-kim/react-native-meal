import {ScrollView, View, Text, Image, StyleSheet, Button} from "react-native";
import {useLayoutEffect} from "react";
import MealDetail from "../components/MealDetail";
import {MEALS} from "../data/dummy-data";
import SubTitle from "../components/MealDetail/SubTItle";
import MealDetailList from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

export default function MealDetailScreen({route, navigation}){
  const mealId = route.params.mealId

  const selectedMeal = MEALS.find(meal => meal.id === mealId)

  const headerButtonPressHandler = () => {
    console.log('onPress');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <IconButton onPress={headerButtonPressHandler} color="white" size={24} />
    })
  }, [])
  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetail
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredient</SubTitle>
          <MealDetailList list={selectedMeal.ingredients} />
          <SubTitle>Step</SubTitle>
          <MealDetailList list={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {width: '100%', height: 350 },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText:{
    color:'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer:{
    width: '80%'
  }
})

