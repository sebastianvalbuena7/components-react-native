import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/Home';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            {/* <Stack.Screen name="Notifications" component={Notifications} />> */}
        </Stack.Navigator>
    );
}