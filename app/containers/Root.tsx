import { IState } from 'app/reducers';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import * as React from 'react';
import { Provider } from 'react-redux';
import * as Redux from 'redux';
import Routes from '../Routes';

interface IProps {
  store: Redux.Store<IState>;
  history: History;
}

export default class Root extends React.Component<IProps> {
  public render() {
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
