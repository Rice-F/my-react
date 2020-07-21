export const counterReducer = (state=0, action) => {
  switch(action.type){
    case 'add':
      return state + 1;
    case 'minus':
      return state - 1;
    default:
      return state;
  }
}

// action creator
export const add = () => ({type: 'add'})
export const minus = () => ({type: 'minus'})
// asyncAdd方法return一个方法
export const asyncAdd = () => dispatch => {
  // 异步操作
  setTimeout(()=> {
    dispatch({type: 'add'})
  },1500)
}