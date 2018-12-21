import { IState } from 'app/reducers';
import { Dispatch } from 'redux';
import { actionCreatorVoid } from './helper';

export const increment = actionCreatorVoid('INCREMENT_COUNTER');
export const decrement = actionCreatorVoid('DECREMENT_COUNTER');

export function incrementIfOdd() {
  return (dispatch: Dispatch, getState: () => IState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay: number = 1000) {
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}
