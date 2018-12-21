import * as React from 'react';
import { Provider } from 'react-redux';
import * as Redux from 'redux';
import { ConnectedRouter } from 'connected-react-router';
import Routes from '../Routes';
import { History } from 'history';
import { IState } from 'app/reducers';

type Props = {
  store: Redux.Store<IState>;
  history: History;
};

export default class Root extends React.Component<Props> {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}
