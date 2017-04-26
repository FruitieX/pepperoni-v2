import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  Button,
} from 'react-native';

import { connect } from 'react-redux';

const mapStateToProps = state => ({
  value: state.counter.value,
});

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch(increment()),
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Counter extends Component {
  static displayName = 'Counter';

  render() {
    const { value, incrementCounter } = this.props;

    return (
      <ScrollView>
        <Text>Counter state: { value }</Text>
        <Button
          onPress={incrementCounter}
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
