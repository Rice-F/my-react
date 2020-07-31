import React from 'react';
import {Input,Button} from 'antd';
import 'antd/dist/antd.css';

// 高阶组件：扩展现有表单的事件处理、数据收集、校验
function SFormCreate (Comp) {

  return class extends React.Component {

    constructor(props) {
      super(props);
      // 验证规则、校验
      this.options = {};
      this.state = {};
    }

    handleChange = (e) => {
      const {name, value} = e.target
      // name属性是动态的
      this.setState({[name]: value}, () => {
        // 确保值发生变化再校验
        this.validateField(name)
      })
    }

    // 校验单个项
    validateField = field => {
      // 1.获取校验规则
      const rules = this.options[field].rules;
      // 2.校验规则中任意一项失败，则返回false
      const ret = !rules.some(rule => {
        if(rule.required) {
          if(!this.state[field]) {
            // 校验失败
            this.setState({
              [field + 'Message']: rule.message
            })
            return true;
          }
        }
      })
      if(ret) {
        // 校验成功
        this.setState({
          [field + 'Message']: ''
        })
      }
      return ret;
    }

    // 校验所有项
    validate = cb => {
      const rets = Object.keys(this.options).map(field => {
        this.validateField(field)
      })
      const ret = rets.every(item => item === true)
      cb(ret, this.state)
    }

    // 创建input包装器
    getFieldDec = (field, option) => {

      // 保存当前输入项配置，验证规则
      this.options[field] = option
      
      return InputComp => (
        // InputComp是虚拟DOM，扩展的时候不能直接修改原组件，要clone出新组件扩展
        <div>
          {React.cloneElement(InputComp, {
            name: field,
            value: this.state[field] || '',
            onChange: this.handleChange
          })}
          {/* 校验的错误信息 */}
          {this.state[field + 'Message'] && (
            <p style={{color: 'red'}}>{this.state[field + 'Message']}</p>
          )}
        </div>
      )
    }

    render () {
      return <Comp getFieldDec={this.getFieldDec} validate={this.validate}></Comp>
    }
  }
}

@SFormCreate
class SForm extends React.Component {
  onSubmit  = () => {
    // 校验所有项
    this.props.validate((isValid, data) => {
      if(isValid) {
        // 提交
        console.log('登录', data)
      }else {
        alert('校验失败')
      }
    })
  }

  render () {
    const {getFieldDec} = this.props
    return (
      <div>
        {getFieldDec("uname", {
          rules: [{required: true, msg: '用户名必填'}]
          }
        )(<Input></Input>)}

        {getFieldDec("pwd", {
          rules: [{required: true, msg: '密码必填'}]
          }
        )(<Input type="password"></Input>)}

        <Button onClick={this.onSubmit}>login</Button>
      </div>
    )
  }
}

export default SForm;