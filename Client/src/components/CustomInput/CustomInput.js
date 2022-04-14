import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const CustomInput = ({placeholder, value, setValue, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  input: {},
});

export default CustomInput;
