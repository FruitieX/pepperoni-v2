import React, { Component } from 'react';
import { Platform, BackAndroid } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import Navigator from './modules/Navigator';
import store from './redux/store';

export default class App extends Component {
  static displayName = 'App';

  componentWillMount() {
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', this.navigateBack);
    }
  }

  navigateBack() {
    const navigatorState = store.getState().navigator;
    const currentTab = navigatorState.index;

    if (currentTab !== 0) {
      store.dispatch(NavigationActions.back());
      return true;
    }

    // Otherwise let OS handle the back button action
    return false;
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
