import { Provider } from 'react-redux';
import store from './src/redux/store';
import Navigator from './src/routes/navigation';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
