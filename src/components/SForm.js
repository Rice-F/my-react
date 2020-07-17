import React from 'react';
import {Input,Button} from 'antd';
import 'antd/dist/antd.css';

// 高阶组件：扩展现有表单的事件处理、数据收集、校验
function SFormCreate (Comp) {
  return class extends React.Component {
    render () {
      return <Comp></Comp>
    }
  }
}

// @SFormCreate
class SForm extends React.Component {
  render () {
    return (
      <div>
        <Input></Input>
        <Button>login</Button>
      </div>
    )
  }
}

export default SForm;