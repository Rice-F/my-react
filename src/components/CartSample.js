import React from 'react';

export class CartSample extends React.Component{
  
  // 状态state初始化一般放在构造器中
  constructor (props) {
    super(props);
    this.state = {
      goods: [
        {id: 1, name: 'web'},
        {id: 2, name: 'ios'},
        {id: 3, name: 'pc'},
        {id: 4, name: 'mobile'},
      ],
      text: '',
      cart: []
    }
  }

  // 这里一定要写成箭头函数，因为这里的方法在调用时会影响this指向
  textChange = (evt) => {
    this.setState({text: evt.target.value})
  }

  // 添加至商品列表
  addGood = () => {
    this.setState(prevState => {
      // 返回一个全新的要更新的数组，而不是在原数组上操作数据
      return {
        goods: [...this.state.goods, {id: prevState.goods.length + 1, name: prevState.text}]
      }
    })
  }

  // 添加至购物车
  addCart = good => {
    const newCart = [...this.state.cart]
    const idx = newCart.findIndex(c => c.id === good.id)
    const item = newCart[idx]
    if(item) {
      newCart.splice(idx, 1, {...item, count: item.count + 1})
    }else {
      newCart.push({...good, count: 1})
    }
    this.setState({cart: newCart})
  }

  // 购物车自减
  minus = good => {
    const newCart = [...this.state.cart]
    const idx = newCart.findIndex(c => c.id === good.id)
    const item = newCart[idx]
    newCart.splice(idx, 1, {...item, count: item.count - 1})
    this.setState({cart: newCart})
  }
  
  // 购物车自增
  add = good => {
    const newCart = [...this.state.cart]
    const idx = newCart.findIndex(c => c.id === good.id)
    const item = newCart[idx]
    newCart.splice(idx, 1, {...item, count: item.count + 1})
    this.setState({cart: newCart})
  }

  render(){
    let title = this.props.title ? <h5>{this.props.title}</h5> : null
    return (
      <div>
        {/* 条件渲染 */}
        {title}
        {this.props.title && <h5>{this.props.title}</h5>}

        {/* 输入框操作 */}
        <div>
          {/* 这里注意赋值给绑定事件的方法一定不能写成this.textChange()，这样就表示立即调用了，其实这里需要的是个方法体 */}
          <input type="text" value={this.state.text} onChange={this.textChange}/>
          <button onClick={this.addGood}>添加</button>
        </div>
        
        {/* 列表渲染 */}
        <ul>
          {this.state.goods.map(good => (
            <li key={good.id}>
              {good.name}
              {/* 事件绑定：不需要传参时，像课程列表的添加事件，只需要传一个函数体就可以了 */}
              {/* 事件绑定：需要传参时，将绑定事件写成一个箭头函数，在函数中执行绑定的方法并传参 */}
              <button onClick={() => this.addCart(good)}>添加购物车</button>
            </li>
          ))}
        </ul>

        {/* 购物车 */}
        {/* 和Vue不同的是，react中子组件尽可能的只做数据展示，不做数据管理及事件操作，有需要事件操作的通知父组件进行操作 */}
        <Cart data={this.state.cart} minus={this.minus} add={this.add}></Cart>
      </div>
    )
  }
}

// 购物车组件
function Cart ({data, minus, add}) {
  return (
    <div>
      <table>
        <tbody>
            {data.map(d => (
              <tr key={d.id}>
                <td>{d.name}</td>
                <td>
                  <button onClick={() => minus(d)}>-</button>
                  {d.count}
                  <button onClick={() => add(d)}>+</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}