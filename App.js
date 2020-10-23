import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignInScreen from './src/screens/SignInScreen'

const navigator = createStackNavigator(

  {
    SignIn: SignInScreen
  },
  {
    initialRouteName: 'SignIn'
  }
)

export default createAppContainer(navigator);