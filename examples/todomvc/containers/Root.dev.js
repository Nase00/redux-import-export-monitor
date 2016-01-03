import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import TodoApp from './TodoApp';
import DevTools from './DevTools';

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object
  };

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <TodoApp />
          <DevTools />
        </div>
      </Provider>
    );
  }
}
