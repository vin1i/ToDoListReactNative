// UserDetails.js

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Avatar } from 'react-native-elements';
import { useContext } from 'react';
import UsersContext from '../contextAPI/UsersContext';

const UserDetails = ({ route, navigation }) => {
  const { state, dispatch } = useContext(UsersContext);
  const { id } = route.params;
  const user = state.users.find(user => user.id === id);

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Usuário não encontrado.</Text>
      </View>
    );
  }

  const handleEdit = () => {
    navigation.navigate('UserForm', { ...user });
  };

  const handleDelete = () => {
    dispatch({ type: 'deleteUser', payload: user });
    navigation.navigate('UserList');
  };

  return (
    <View style={styles.container}>
      <Avatar source={{ uri: user.avatarURL }} size="xlarge" rounded />
      <Text style={styles.text}>Nome: {user.name}</Text>
      <Text style={styles.text}>Email: {user.email}</Text>
      <Text style={styles.text}>ID: {user.id}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Editar" onPress={handleEdit} />
        <Button title="Excluir" onPress={handleDelete} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 20,
  },
});

export default UserDetails;
