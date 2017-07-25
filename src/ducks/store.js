import {createStore, applyMiddleware, combineReducers} from 'redux';
import starwarsReducer from './starwars';
import reduxPromiseMiddleware from 'redux-promise-middleware';

const reducer = combineReducers({
    starwars: starwarsReducer
})

export default createStore(
    reducer,
    applyMiddleware(reduxPromiseMiddleware())
);



