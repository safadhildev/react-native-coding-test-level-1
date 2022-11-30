import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Catalog from '../../screens/Catalog';
import ContactUs from '../../screens/ContactUs';
import Main from '../../screens/Main';

import constants from '../../components/constants';
import CatalogDetails from '../../screens/CatalogDetails';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={constants.routes.Main}
    >
      <Stack.Screen name={constants.routes.Main} component={Main} />
      <Stack.Screen name={constants.routes.ContactUs} component={ContactUs} />
      <Stack.Screen name={constants.routes.Catalog} component={Catalog} />
      <Stack.Screen name={constants.routes.CatalogDetails} component={CatalogDetails} />
    </Stack.Navigator>
  );
};

export default HomeStack;
