import {Text, StyleSheet, TouchableOpacity, Pressable} from "react-native";
import React from "react";

const CustomButton = ({onPress, text}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Pressable onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3b71f3",
    width: "100%",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 5,
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
});

export default CustomButton;
