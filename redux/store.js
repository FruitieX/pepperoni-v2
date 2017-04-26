import { applyMiddleware, createStore, compose } from 'redux';

import middleware from './middleware';
import reducer from './reducer';

const enhancers = [
  /* -- Add Redux enhancers here -- */
  applyMiddleware(...middleware),
];

/* Enable redux dev tools only in development.
 * We suggest using the standalone React Native Debugger extension:
 * https://github.com/jhen0409/react-native-debugger
 */
/* eslint-disable no-undef */
const composeEnhancers = (__DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
/* eslint-enable no-undef */

const enhancer = composeEnhancers(...enhancers);

// create the store
export default const store = createStore(
  reducer,
  null,
  enhancer,
);
