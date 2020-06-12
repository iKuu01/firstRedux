import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './src/reducers/rootReducer';
import { RouterComp } from './src/router';
import ReduxThunk from 'redux-thunk';

export default class App extends Component {
  render() {
    const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <RouterComp />
      </Provider>
    )
  }
}
