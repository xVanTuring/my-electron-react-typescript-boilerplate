import { routerMiddleware } from 'connected-react-router';
import { createHashHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createRootReducer, { IState } from '../reducers';

const history = createHashHistory();
const rootReducer = createRootReducer(history);
const router = routerMiddleware(history);
const enhancer = applyMiddleware(thunk, router);

function configureStore(initialState?: IState) {
  return createStore(rootReducer, initialState, enhancer);
}

export default { configureStore, history };
