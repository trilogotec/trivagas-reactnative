import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

/**
|--------------------------------------------------
| AuthStack
|--------------------------------------------------
*/
import AuthLoadingScreen from './containers/Login/AuthLoading';
import LoginScreen from './containers/Login/Login';
import RegisterScreen from './containers/Login/Register';

/**
|--------------------------------------------------
| AppStack
|--------------------------------------------------
*/
import HomeScreen from './containers/Home/Home';

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});
const AppStack = createStackNavigator({
  Home: HomeScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);
