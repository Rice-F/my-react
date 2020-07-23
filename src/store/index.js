// applyMiddleware 应用中间件方法
import {createStore, applyMiddleware, combineReducers} from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {counterReducer} from './count.redux'
import {user} from './user.redux'

const store = createStore(
  // combineReducers将多个模块的reducer合并
  // 在使用具体某个reducer的时候要注意命名空间
  combineReducers({counter: counterReducer, user}), 
  applyMiddleware(logger, thunk)
);

export default store;
