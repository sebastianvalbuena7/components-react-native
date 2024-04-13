import 'react-native-gesture-handler';
import { StackNavigator } from './src/presentation/navigator/StackNavigator';
import { ThemeProvider } from './src/presentation/context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <StackNavigator />
    </ThemeProvider>
  )
}

export default App;