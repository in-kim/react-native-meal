import {View, Text, StyleSheet} from "react-native";

export default function MealDetailList(props){
  const {list} = props;

  return list.map(item => (
      <View key={item} style={styles.listItem}>
        <Text style={styles.itemText}>{item}</Text>
      </View>
    )
  )
}

const styles = StyleSheet.create({
  listItem:{
    backgroundColor:'#e2b497',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
  },
  itemText:{
    color: '#351401',
    textAlign: 'center'
  }
})