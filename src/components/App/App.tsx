import React from 'react';
import { Provider } from 'react-redux';
import store from 'redux/store';
import MainPage from 'pages/MainPage/MainPage';

const App: React.FC = () => (
  <Provider store={store}>
    <MainPage />
  </Provider>
);

export default App;
