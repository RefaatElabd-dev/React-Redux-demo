import './App.css';
import { Provider } from 'react-redux';

import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';

import store from './redux/store';
import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <HookCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
