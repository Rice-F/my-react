import React from 'react';
import {Input,Button} from 'antd';
import 'antd/dist/antd.css';

function CopyFormCreate (Comp) {
  
  return class extends React.Component {

    // 创建input包装器，将input事件相关的处理委托给更高层级
    // 接收2个参数，一个是input类型，一个是校验规则
    // 返回一个函数，这个函数又是一个高阶组件，接收传进来的input组件
    getFieldDec = (field, option) => {
      return InputComp => (
        <div></div>
      )
    }

    render () {
      return <Comp></Comp>
    }
  }
}

@CopyFormCreate
class CopyAntdForm extends React.Component {
  render () {
    return (
      <div>
        <Input></Input>
        <Button>login</Button>
      </div>
    )
  }
}

export default CopyAntdForm;
