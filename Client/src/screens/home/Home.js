import {View, Text, StyleSheet, useWindowDimensions} from "react-native";
import React from "react";
import Logo from "../../../assets/images/bikair.png";

const Home = () => {
  const {height} = useWindowDimensions();
  return (
    <View>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />
      <Text>home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "100%",
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default Home;
