import React, { useState, useContext } from "react";
import { Text, View, TextInput, StyleSheet, Button  } from "react-native";
import UsersContext from "../contextAPI/UsersContext"; 


const UserForm = ({ route, navigation }) => {
  const [user, setUser] = useState(route.params ? route.params : {});
const {dispatch} = useContext(UsersContext)
  return (
    <View style={styles.form}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={name => setUser({ ...user, name })}
          placeholder="Informe o Nome"
          value={user.name}
          placeholderTextColor="#aaa"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={email => setUser({ ...user, email })}
          placeholder="Informe o Email"
          value={user.email}
          placeholderTextColor="#aaa"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>URL do Avatar</Text>
        <TextInput
          style={styles.input}
          onChangeText={avatarURL => setUser({ ...user, avatarURL })}
          placeholder="Informe a URL do Avatar"
          value={user.avatarURL}
          placeholderTextColor="#aaa"
        />
      </View>

      <Button 
      title="Salvar"
      onPress={() => {
        dispatch({
          type:user.id ? "updateUser" : "createUser",
          payload: user,
        })
        navigation.goBack()}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 20,
    backgroundColor: "#f8f9fa",
    flex: 1,
    justifyContent: "center",
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    color: "#333",
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default UserForm;
