import {Text, View, StyleSheet} from "react-native";

export default function SubTitle({children}){
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  subTitle:{
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#e2b497',
  },
  subTitleContainer:{
    borderBottomWidth: 2,
    borderBottomColor: '#e2b497',
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
  }
})