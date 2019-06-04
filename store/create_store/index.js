import { applyMiddleware, compose, createStore } from "redux";
import reducers from '../reducers';
import promise from 'redux-promise-middleware';

const middleware = applyMiddleware(promise);
const enhanser = compose(middleware);
const store = createStore(reducers,enhanser);

export default store;