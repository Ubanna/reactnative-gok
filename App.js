import 'react-native-gesture-handler';
// Before rendering any navigation stack
import { enableScreens } from 'react-native-screens';
enableScreens();
import React from 'react';
import Navigation from "./src/navigation/Navigation"
import { Provider } from "react-redux";
import { store, persistor } from "./src/components/redux/store";
import { PersistGate } from 'redux-persist/integration/react';
 

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    );
  }
};
