import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from './src/presentation/navigator/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}

export default App;