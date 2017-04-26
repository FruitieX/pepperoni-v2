import React, { Component } from 'react';

import { connect } from 'react-redux';
import { TabNavigator, addNavigationHelpers } from 'react-navigation';

export const AppNavigator = TabNavigator({
  /* -- Add views here -- */
  Counter: { screen: require('./Counter').default },
});

const mapStateToProps = state => ({
  navigatorState: state.navigator,
});

@connect(mapStateToProps)
export default class Navigator extends Component {
  static displayName = 'NavigationView';

  render() {
    const { navigatorState, dispatch } = this.props;

    return (
      <AppNavigator
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigatorState,
          })
        }
      />
    );
  }
}

export const reducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);

  if (state) {
    const currentRoute = state.routes[state.index];
    const newRoute = newState.routes[newState.index];

    // Prevent stacking identical views
    if (currentRoute.routeName === newRoute.routeName) {
      return state;
    }
  }

  return newState || state;
};
