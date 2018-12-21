import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import counter, { TState as TCounterState } from './counter';

const createRootReducer = (history: History) => {
  return combineReducers({
    counter,
    router: connectRouter(history),
  });
};

export interface IState {
  counter: TCounterState;
}

export default createRootReducer;
