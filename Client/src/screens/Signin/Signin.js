import React, {useState} from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  useWindowDimensions,
  TextInput,
} from "react-native";
import CustomInput from "../../components/CustomInput";
import Logo from "../../../assets/images/bikair.png";
import CustomButton from "../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import {signin, signup} from "../../api/index";

const Signin = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [value, setValue] = useState("");
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const handleUser = () => {
    console.warn("usename");
  };

  const handleSubmit = async e => {
    e.preventDefault();
    signin(email, password);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />
      <View style={styles.wrapper} onSubmit={handleSubmit}>
        <TextInput
          placeholder="Enter email ... "
          onChange={e => setEmail(e.target.value)}
          style={styles.input}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Enter password ... "
          onChange={e => setPassword(e.target.value)}
          style={styles.input}
        />
        <CustomButton text="Sign In" />
      </View>

      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("Signup")}
      >
        <Pressable>
          <Text style={styles.text}>Don't have an account yet? create one</Text>
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
  wrapper: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
  },
  input: {marginVertical: 10, paddingHorizontal: 10},
});

export default Signin;
