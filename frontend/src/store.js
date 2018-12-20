import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const inititalState = {};

// const store = createStore(
//         rootReducer, 
//         inititalState, 
//         compose(applyMiddleware(thunk), 
//         window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()));

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
        && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(rootReducer, devTools)

export default store;