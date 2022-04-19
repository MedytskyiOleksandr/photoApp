
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk'
import reducer from './store/reducers/reducer';
import StackNavigator from './navigation/StackNavigator';

const store = createStore(reducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
}
