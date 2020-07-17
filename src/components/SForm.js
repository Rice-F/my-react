import React from 'react';
import {Input,Button} from 'antd';
import 'antd/dist/antd.css';

// 高阶组件：扩展现有表单的事件处理、数据收集、校验
function SFormCreate (Comp) {

  return class extends React.Component {

    constructor(props) {
      super(props);
      this.options = {};
      this.state = {};
    }

    handleChange = (e) => {
      const {name, value} = e.target
      this.setState({[name]: value})
    }

    // 创建input包装器
    getFieldDec = (field, option) => {
      // 保存当前输入项配置，验证规则
      this.options[field] = option
      return InputComp => (
        <div>
          {React.cloneElement(InputComp, {
            name: field,
            value: this.state[field] || '',
            onChange: this.handleChange
          })}
        </div>
      )
    }

    render () {
      return <Comp getFieldDec={this.getFieldDec}></Comp>
    }
  }
}

@SFormCreate
class SForm extends React.Component {
  render () {
    const {getFieldDec} = this.props
    return (
      <div>
        <Input></Input>
        <Button>login</Button>
      </div>
    )
  }
}

export default SForm;