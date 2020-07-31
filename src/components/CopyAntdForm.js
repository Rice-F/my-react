import React from 'react';
import {Input,Button} from 'antd';
import 'antd/dist/antd.css';

function CopyFormCreate (Comp) {
  
  return class extends React.Component {

    constructor(props) {
      super(props);
      // 验证规则、校验
      this.options = {};
      this.state = {};
    }

    handleChange = (e) => {
      const {name, value} = e.target
      console.log(name, value)
      // name属性是动态的
      this.setState({[name]: value})
    }

    // 创建Input包装器，将Input事件相关的处理委托给更高层级
    // 接收2个参数，一个是Input类型，一个是校验规则
    // 返回一个函数，这个函数又是一个高阶组件，接收传进来的Input组件
    getFieldDec = (field, option) => {

      // 保存当前输入项配置，验证规则
      this.options[field] = option

      return InputComp => (
        // InputComp是虚拟DOM，扩展的时候不能直接修改原组件，要clone出新组件扩展
        <div>
          {React.cloneElement(InputComp, {
            // 组件type, 区分用户名、密码、按钮等
            name: field,
            // Input绑定的值
            value: this.state[field] || '',
            // Input事件
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

@CopyFormCreate
class CopyAntdForm extends React.Component {
  render () {
    const {getFieldDec} = this.props
    return (
      <div>
        {getFieldDec('uname', {
          rules: [{required: true, msg: '用户名必填'}]
        })(<Input></Input>)}
        
        <Button>login</Button>
      </div>
    )
  }
}

export default CopyAntdForm;
