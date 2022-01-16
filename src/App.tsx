import React from 'react';
import { Provider } from 'react-redux';
import store from "./Redux/Store";
import Home from './Components/Pages/Home/Home';
import { getAllFavorites } from './Redux/actionsCreator';
import "./Styles/normalize.css";
import "./Styles/styles.scss";
store.dispatch(getAllFavorites())
function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
