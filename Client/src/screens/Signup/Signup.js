import React, {useState} from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  useWindowDimensions,
} from "react-native";
import CustomInput from "../../components/CustomInput";
import Logo from "../../../assets/images/bikair.png";
import CustomButton from "../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState("");
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const handleUser = () => {
    console.warn("usename");
  };

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />

      <CustomInput
        placeholder="Enter username ... "
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="Enter email ... "
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="Enter password ... "
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      <CustomButton onPress={handleUser} text="Sign up" />
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("Signin")}
      >
        <Pressable>
          <Text style={styles.text}>Already have an account? Sign in</Text>
        </Pressable>
      </TouchableOpacity>
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
  container: {
    backgroundColor: "lightblue",
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

export default Signup;
