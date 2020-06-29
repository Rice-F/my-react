import React from 'react';
import { render } from 'react-dom';

// 函数类型组件
export default function Welcome1 () {
  return (
    <div>
      Welcome1
    </div>
  )
}

// 类组件
export class Welcome2 extends React.Component{
  render(){
    return <div>Welcome2</div>
  }
} 