import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  Button,
} from 'react-native';

import { connect } from 'react-redux';
import { increment } from './Counter';

const mapStateToProps = state => ({
  counterState: state.counter,
});

const mapDispatchToProps = dispatch => ({
  incrementCounter: dispatch(increment()),
});

@connect(mapStateToProps, mapDispatchToProps)
export default class {{ properCase name }} extends Component {
  static displayName = '{{ properCase name }}';

  render() {
    const { counterState, incrementCounter } = this.props;

    return (
      <ScrollView>
        <Text>Counter state: { counterState }</Text>
        <Button
          onPress={incrementCounter}
          title='Increment'
        />
      </ScrollView>
    );
  }
}
