import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  Button,
} from 'react-native';

import { connect } from 'react-redux';

const mapStateToProps = state => ({
  counterState: state.counter,
});

const mapDispatchToProps = dispatch => ({
  increment: dispatch(incrementCounter()),
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Counter extends Component {
  static displayName = 'Counter';

  render() {
    const { counterState, increment } = this.props;

    return (
      <ScrollView>
        <Text>Counter state: { counterState }</Text>
        <Button
          onPress={increment}
          title='Increment'
        />
      </ScrollView>
    );
  }
}

// Initial state
const initialState = {
  value: 0,
};

// Actions
const INCREMENT = 'CounterState/INCREMENT';
const RESET = 'CounterState/RESET';

// Action creators
export const increment = () => ({ type: INCREMENT });
export const reset = () => ({ type: RESET });

// Reducer
export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };

    case RESET:
      return initialState;

    default:
      return state;
  }
};
