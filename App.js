import { Provider } from 'react-redux';
import store from './src/redux/store';
import Navigator from './src/routes/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
