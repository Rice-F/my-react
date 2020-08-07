// 初始化状态，没在登录中 并且 未登录
const initial = {
  isLogin: false,
  loading: false
}

export const user = (state = initial, action) => {
  switch(action.type) {
    // 登录中
    case "requestLogin":
      return {
        isLogin: false,
        loading: true
      };
    // 已登录 
    case "login":
      return {
        isLogin: true,
        loading: false
      };
    default:
      return state;
  }
}

// 请求登录异步调用时，先修改状态为登录中
export const login = () => dispatch => {
  dispatch({type: 'requestLogin'});
  setTimeout(() => {
    dispatch({type: 'login'})
  }, 1500);
}