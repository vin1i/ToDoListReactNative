import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import UserForm from "./src/components/UserForm";

const Stack = createStackNavigator()

export default (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="UserList">

                <Stack.Screen
                    name="UserList"
                    component={UserList}
                />
                <Stack.Screen
                    name="UserList"
                    component={UserForm}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};
