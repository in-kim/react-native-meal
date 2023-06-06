import {View, Text, Pressable, StyleSheet, Platform} from "react-native";

export default function CategoryGridTIle({title, color, onPress}){
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
        android_ripple={{color: '#ddd'}}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, {backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
  gridItem: {
    flex:1,
    margin:16,
    height:150,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity:0.25,
    shadowOffset: {width:0, height:2},
    shadowRadius: 8,
    overflow: Platform.select({ios: 'visible', android: 'hidden'})
  },
  button:{flex:1},
  buttonPressed:{opacity: 0.5},
  innerContainer:{
    flex:1,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold'
  }
})