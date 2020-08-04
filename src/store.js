import {createStore} from 'redux';

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
const store = createStore(counterReducer)

export default store;