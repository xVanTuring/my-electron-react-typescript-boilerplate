import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import counter, { TState as TCounterState } from './counter';
import { History } from 'history';

const createRootReducer = (history: History) => {
  return combineReducers({
    counter,
    router: connectRouter(history)
  });
};

export interface IState {
  counter: TCounterState;
}

export default createRootReducer;
