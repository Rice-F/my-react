import React from 'react';
import {BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom'

function Home() {
  return <div>
    <h5>Home</h5>
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
      <h5>About</h5>
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

// 保留路由组件所需的参数component、以及其他参数例如pth等，同时传一个登录状态isLogin
function PrivateRoute ({component: Comp, isLogin, ...rest}) {
  return (
    // render函数 根据条件动态渲染组件
    // 未登录则重定向至登录页
    // 登录路由也配置了一个redirect，这样在设计登录组件的时候当登录成功即重定向跳转至登录前访问的页面
    <Route
      {...rest}
      render = {
        props => isLogin ? (<Comp></Comp>) : (<Redirect
          to={{pathname: "/login", state: {redirect: props.location.pathname}}}
        ></Redirect>)
      }
    ></Route>
  )
}

// 从路由参数拿到重定向地址，从redux获取登录状态和登录方法
function Login ({location, isLogin, login}) {
  const redirect = location.state.redirect || '/'
  if(isLogin) {
    return <Redirect to={redirect}></Redirect>
  }
  return (
    <div>
      <p>用户登录</p>
      <hr/>
      <button onClick={login}>login</button>
    </div>
  )
}

export default function RouteSample () {
  return (
    <div>
      <BrowserRouter>
        <div>

          {/* 导航链接 */}
          <div><Link to="/">首页</Link></div>
          <div><Link to="/about">关于</Link></div>

          {/* 路由配置：路由就是组件 */}
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <PrivateRoute path="/about" component={About}></PrivateRoute>
            <Route path="/detail/:lesson" component={Detail}></Route>
            <Route path="/login" component={Login}></Route>
            {/* 404页面没有path 当有path的路由都不匹配时那必然匹配404*/}
            <Route component={NoMatch}></Route>
          </Switch>
        </div>   
      </BrowserRouter>
    </div>
  )
}