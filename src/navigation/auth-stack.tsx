import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home, Login, Settings } from "@screens";
import { selectAuth, useAppSelector } from "@store";
import { AuthStackParamsList } from "@navigation-types";

const Stack = createStackNavigator<AuthStackParamsList>();

export const AuthStack = () => {
  const { isAuthorized } = useAppSelector(selectAuth);
  return (
    <Stack.Navigator
      initialRouteName={isAuthorized ? "Home" : "Login"}
      screenOptions={{
        headerShown: false,
      }}
    >
      {isAuthorized ? (
        <Stack.Group>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Group>
      ) : (
        <>
          <Stack.Group>
            <Stack.Screen name="Login" component={Login} />
          </Stack.Group>
        </>
      )}
    </Stack.Navigator>
  );
};

export default AuthStack;
