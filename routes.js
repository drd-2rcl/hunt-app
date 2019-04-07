import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './src/pages/main'
import Product from './src/pages/product'

const AppNavigator = createStackNavigator(
  {
    Main,
    Product
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#DA552F"
      },
      headerTintColor: "#ff0000"
    }
  }
);

 const AppContainer =  createAppContainer(AppNavigator);


 export default AppContainer;


