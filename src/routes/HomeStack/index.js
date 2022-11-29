import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactUs from '../../screens/ContactUs';
import Main from '../../screens/Main';
import routes from '../routes';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={routes.Main}>
      <Stack.Screen name={routes.Main} component={Main} />
      <Stack.Screen name={routes.ContactUs} component={ContactUs} />
    </Stack.Navigator>
  );
};

export default HomeStack;
