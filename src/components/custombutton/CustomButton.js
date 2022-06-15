import React from "react";
import {View, Text, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import {StatusBar} from "expo-status-bar";

const CustomButton = ({onPess, text, type = "PRIMARY", bgColor, fgColor}) => {
  return(
      <Pressable
          onPess={onPess}
          style={[
              styles.container,
              styles[`container_${type}`],
              bgColor ? {backgroundColor: bgColor} : {}
          ]}>
          <Text
              style={[
                  styles.text,
                  styles[`text_${type}`],
                  fgColor ? {color: fgColor} : {}
              ]}>{text}</Text>
          {/*<LinearGradient*/}
          {/*    // Button Linear Gradient*/}
          {/*    colors={colorType}*/}
          {/*    start={{ x: 0.50, y: 0 }}*/}
          {/*    style={styles.container}*/}
          {/*>*/}
          {/*    */}
          {/*</LinearGradient>*/}
      </Pressable>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0038FF',
        width: '75%',

        padding: 15,
        marginVertical: 5,

        alignItems: "center",
        borderRadius: 5,
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
});

export default CustomButton;