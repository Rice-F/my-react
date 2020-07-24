import React from 'react';
import {BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom'
import {connect} from 'react-redux';
import {login} from '../store/user.redux'

function Home() {
  return <div>
    <h5>lessons</h5>
    <ul>
      <li><Link to="/detail/web">web</Link></li>
      <li><Link to="/detail/ios">ios</Link></li>
    </ul>
  </div>
}

// 当前用户信息
function About () {
  return (
    <div>
      <h5>个人中心</h5>
      <div>
        <Link to="/about/me">个人信息</Link>
        <Link to="/about/order">订单信息</Link>
      </div>
      <Switch>
        <Route path="/about/me" component={() => (<div>me</div>)}></Route>
        <Route path="/about/order" component={() => (<div>order</div>)}></Route>
        {/* 路由默认项 */}
        <Redirect to="/about/me"></Redirect>
      </Switch>
    </div>
  )
}

// 传递进来的是路由器对象
function Detail (routeParams) {
  console.log('routeParams',routeParams)
  // 1. history  导航指令  history.goBack
  // 2. match 获取参数信息
  // 3. location 当前url信息
  return (
    <div>
      当前课程：{routeParams.match.params.lesson}
      <button onClick={routeParams.history.goBack}>后退</button>
    </div>
  )
}

function NoMatch ({location}) {
  return (
    <div>404, {location.pathname}不存在</div>
  )
}

// 路由守卫
const PrivateRoute = connect(
  state => ({isLogin: state.user.isLogin})
)(
  ({component: Comp, isLogin, ...rest}) => {
    return (
      // render 根据条件动态渲染组件
      <Route
        {...rest}
        render={
          props => isLogin ? 
          (<Comp></Comp>) : 
          (<Redirect
            to={{pathname: "/login", state: {redirect: props.location.pathname}}}
          ></Redirect>)
        }
      >
      </Route>
    )
  }
)

// 登录组件
const Login = connect(
  state => ({
    isLogin: state.user.isLogin,
    loading: state.user.loading
  }),
  {login}
)(
  ({location, isLogin, login, loading}) => {
    const redirect = location.state.redirect || '/'
    if(isLogin) {
      return <Redirect to={redirect}></Redirect>
    }
    return (
      <div>
        <p>用户登录</p>
        <hr/>
        <button onClick={login} disabled={loading}>
          {loading ? 'login...' : 'login'}
        </button>
      </div>
    )
  }
)

export default function RouteSample () {
  return (
    <div>
      <BrowserRouter>
        <div>
          {/* 导航链接 */}
          <div><Link to="/">首页</Link></div>
          <div><Link to="/about">关于</Link></div>
          {/* 配置 */}
          {/* 路由匹配默认包容性质 下面的例子中 当匹配/时也会同时包容/about、/detail/:lesson */}
          {/* 使用exact配置项或者Switch组件，都可以避免展示包容式路由 */}
          <Switch>
            <Route exact path="/" component={Home}></Route>
            {/* 路由守卫 */}
            <PrivateRoute path="/about" component={About}></PrivateRoute>
            {/* <Route path="/about" component={About}></Route> */}
            <Route path="/detail/:lesson" component={Detail}></Route>
            <Route path="/login" component={Login}></Route>
            {/* 404页面没有path */}
            <Route component={NoMatch}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}