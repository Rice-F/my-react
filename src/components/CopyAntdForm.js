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
      // console.log(name, value)
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
      // eslint-disable-next-line
      const ret = !rules.some(rule => {
        if(rule.required) {
          if(!this.state[field]) {
            // 校验失败
            this.setState({
              [field + 'Message']: rule.msg
            })
            return true;
          }
        }
      })
      if(ret) {
        // 校验成功 清空错误信息
        this.setState({
          [field + 'Message']: ''
        })
      }
      return ret;
    }

    // 校验所有项
    validate = cb => {
      // 遍历存储输入项配置及验证规则的数组，获取每一个Input组件的配置
      // eslint-disable-next-line 
      const rets = Object.keys(this.options).map(field => {
        this.validateField(field)
      })
      // 每一项都校验成功才能通过
      const ret = rets.every(item => item === true)
      cb(ret, this.state)
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

@CopyFormCreate
class CopyAntdForm extends React.Component {

  // 登录按钮提交
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
    // 引入包装器
    const {getFieldDec} = this.props
    return (
      <div>

        {/* 调用包装器函数，把input类型、验证规则和Input组件传入 */}
        {getFieldDec('uname', {
          rules: [{required: true, msg: '用户名必填'}]
        })(<Input></Input>)}

        {getFieldDec("pwd", {
          rules: [{required: true, msg: '密码必填'}]
          }
        )(<Input type="password"></Input>)}
        
        <Button onClick={this.onSubmit}>login</Button>
      </div>
    )
  }
}

export default CopyAntdForm;
