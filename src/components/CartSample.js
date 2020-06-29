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
      ]
    }
  }

  render(){
    // let title = this.props.title ? <h5>this.props.title</h5> : null
    return (
      <div>
        {/* 条件渲染 */}
        {this.props.title && <h5>{this.props.title}</h5>}

        {/* 列表渲染 */}
        <ul>
          {this.state.goods.map(good => <li key={good.id}>{good.name}</li>)}
        </ul>
      </div>
    )
  }
}