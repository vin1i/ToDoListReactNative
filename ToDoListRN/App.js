import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Icon } from "react-native-elements";
import UserForm from "./src/components/UserForm";
import UserList from "./src/components/UserList";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="UserList"
                screenOptions={screenOptions}>
                <Stack.Screen
                    name="UserList"
                    component={UserList}
                    options={({ navigation }) => {
                        return {
                            title: "Lista de Usuários",
                            headerRight: () => (
                                <Button
                                    onPress={() => navigation.navigate('UserForm')}
                                    type="clear"
                                    icon={<Icon name="add" size={25} color="white" />}
                                />
                            )
                        }
                    }}
                />
                <Stack.Screen
                    name="UserForm"
                    component={UserForm}
                    options={{
                        title: "Formulário de Usuários"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
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
}

export default App;
