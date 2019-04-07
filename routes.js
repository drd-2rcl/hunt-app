import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './src/pages/main'

const AppNavigator = createStackNavigator({
  Main
}, {
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


