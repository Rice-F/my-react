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

function PrivateRoute ({component: Comp, isLogin, ...rest}) {
  return (
    <Route></Route>
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
            <Route path="/about" component={About}></Route>
            <Route path="/detail/:lesson" component={Detail}></Route>
            {/* 404页面没有path 当有path的路由都不匹配时那必然匹配404*/}
            <Route component={NoMatch}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}