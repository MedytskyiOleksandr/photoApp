import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FullImage from '../screens/FullImage';
import Gallery from '../screens/Gallery';

const Stack = createStackNavigator();

function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Gallery} />
                <Stack.Screen name="Image" component={FullImage} options={{
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigator