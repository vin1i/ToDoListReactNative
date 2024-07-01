import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Icon } from "react-native-elements";
import UserForm from "./src/components/UserForm";
import UserList from "./src/components/UserList";
import { UsersProvider } from "./src/contextAPI/UsersContext";
import SettingsScreen from "./src/components/SettingsScreen";
import UserSearch from "./src/components/UserSearch";
import { StyleSheet, View } from "react-native"; 
import UserDetails from "./src/components/UserDetails";
const Stack = createStackNavigator();

const App = () => {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="UserList" screenOptions={screenOptions}>
          {/* Adicione a rata para UserSearch */}
          <Stack.Screen
            name="UserSearch"
            component={UserSearch}
            options={{ title: "Buscar Usuários" }} // Defina o título da tela de busca
          />
             <Stack.Screen
            name="UserDetails"
            component={UserDetails} // Adicione a tela UserDetails ao Stack Navigator
            options={{ title: "Detalhes do Usuário" }}
          />

          <Stack.Screen
            name="UserForm"
            component={UserForm}
            options={{ title: "Formulário de Usuários" }}
          />
          <Stack.Screen
            name="SettingsScreen"
            component={SettingsScreen}
            options={{ title: "Configurações" }}
          />
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={({ navigation }) => ({
              title: "Lista de Usuários",
              headerRight: () => (
                <View style={styles.headerButtonsContainer}>
                  <Button
                    onPress={() => navigation.navigate('UserForm')} // Navegue para a tela UserForm para adicionar um usuário
                    type="clear"
                    icon={<Icon name="add" size={25} color="white" />} // Ícone para o botão de adicionar usuário
                  />
                  <Button
                    onPress={() => navigation.navigate('UserSearch')} // Navegue para a tela UserSearch para buscar usuários
                    type="clear"
                    icon={<Icon name="search" size={25} color="white" />} // Ícone para o botão de buscar usuário
                  />
                </View>
              ),
              headerLeft: () => (
                <Button
                  onPress={() => navigation.navigate('SettingsScreen')}
                  type="clear"
                  icon={<Icon name="settings" size={25} color="white" />}
                />
              ),
            })}
          />

         
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
};

const screenOptions = {
  headerStyle: {
    backgroundColor: "#8ec5fc"
  },
  headerTintColor: "#ffff",
  headerTitleStyle: {
    fontWeight: "bold"
  }
};

const styles = StyleSheet.create({ // Corrija a importação do StyleSheet e adicione a função create
  headerButtonsContainer: {
    flexDirection: "row",
    marginRight: 10,
  },
});

export default App;
