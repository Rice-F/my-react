// applyMiddleware 应用中间件方法
import {createStore, applyMiddleware} from 'redux';
// 引入中间件
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// 初始化状态
// 状态的操作
const counterReducer = (state = 0, action) => {
  switch(action.type){
    case 'add':
      return state + 1;
    case 'minus':
      return state - 1;
    default:
      return state;
  } 
}

// 创建一个store
const store = createStore(
  counterReducer, 
  // 按照需要使用的中间件的顺序传递参数
  applyMiddleware(logger, thunk)
)

export default store;