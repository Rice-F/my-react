import React from 'react'

// 高阶组件：接收一个组件，返回一个新的组件
const hocComponent = Comp => {
  // 获取name
  let name = "hoc"

  // 扩展组件的同时要带上父组件传递的数据，展开props进行传递
  // return props => <Comp {...props} name={name}></Comp>

  return class extends React.Component {

    componentDidMount () {
      // console.log('hoc didmount')
    }

    render () {
      return <Comp {...this.props} name={name}></Comp>
    }
  }
}

const withLog = Comp => {
  console.log(`${Comp.name}渲染了`)
  return props => <Comp {...props}></Comp>
}

// const extendLesson = Comp => {
//   // 这里可以理解为通过api调用获取name属性
//   let name = 'hoc'
//   // 传递新属性name的同时，不要忘记带上组件由上级传递的属性
//   return props => <Comp {...props} name={name}></Comp>
// }

const extendLesson = Comp => {
  let name = 'hoc'
  return class newComp extends React.Component {
    componentDidMount () {
      console.log('newComp componentDidMount')
    }
    render () {
      return <Comp {...this.props} name={name}></Comp>
    }
  }
}


// @withLog
// @hocComponent
// @withLog
class Lesson extends React.Component{
  render () {
    return (
      <div>
        {/* name需要异步调用获取 */}
        {this.props.stage} - {this.props.name}
      </div>
    )
  }
}

// 高阶组件链式调用
// const NewLesson = withLog(hocComponent(withLog(Lesson)));

const NewLesson = withLog(extendLesson(withLog(Lesson)))

export class Hoc extends React.Component {
  render () {
    return (
      <div>
        <NewLesson stage="React"></NewLesson>
        {/* <Lesson stage="React"></Lesson> */}
      </div>
    )
  }
}