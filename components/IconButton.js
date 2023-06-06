import {Pressable, StyleSheet} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
export default function IconButton({size, color, onPress}){
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
      <Ionicons name="star" size={size} color={color} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressed:{
    opacity: 0.7
  }
})