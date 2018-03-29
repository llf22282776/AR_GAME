'use strict';

import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import {createLogger} from 'redux-logger';


import NavigatorReducer from './reducers/NavigatiorReducer';
import ArReducer from './reducers/ArReducer';
import {navigator_midderware } from "./components/NavigationPage"


const logger = createLogger();

const store = createStore(
    combineReducers({
        navigator: NavigatorReducer,
        ar: ArReducer,
   
    }),
    {},  //initialState
    applyMiddleware(thunk, promiseMiddleware(),navigator_midderware, logger) //传入所有的
);

export default store;