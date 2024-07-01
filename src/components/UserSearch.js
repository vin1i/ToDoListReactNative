// UserSearch.js

import React, { useState, useContext } from 'react';
import { View, TextInput, StyleSheet, Button, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import UsersContext from '../contextAPI/UsersContext';

const UserSearch = () => {
  const { state } = useContext(UsersContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = state.users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const renderItem = ({ item: user }) => (
    <ListItem bottomDivider>
      <Avatar source={{ uri: user.avatarURL }} />
      <ListItem.Content>
        <ListItem.Title>{user.name}</ListItem.Title>
        <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar usuário por nome"
        value={searchTerm}
        onChangeText={text => setSearchTerm(text)}
      />
      <Button title="Buscar" onPress={handleSearch} />
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={searchResults}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default UserSearch;
