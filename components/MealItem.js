import {View, Text, Pressable, Image, StyleSheet, Platform} from "react-native";
import {useNavigation} from "@react-navigation/native";
import MealDetail from "./MealDetail";

export default function MealItem({id, title, imageUrl, duration, complexity, affordability}){
  const navigation = useNavigation();

  const selectMealItemHandler = () => {
    navigation.navigate('MealDetailView', {mealId: id})
  }
  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={selectMealItemHandler}
        android_ripple={{color: '#ddd'}}
        style={({pressed}) => pressed ? styles.buttonPressed : null}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{uri: imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetail duration={duration} complexity={complexity} affordability={affordability}/>
        </View>
      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  mealItem:{
    backgroundColor: '#fff',
    margin:16,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity:0.25,
    shadowOffset: {width:0, height:2},
    shadowRadius: 8,
    overflow: Platform.select({ios: 'visible', android: 'hidden'})
  },
  innerContainer:{
    borderRadius: 8,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 8,
  },
  buttonPressed:{opacity: 0.5},
})