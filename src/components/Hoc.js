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


@withLog
@hocComponent
@withLog
class Lesson extends React.Component{
  render () {
    return (
      <div>
        {this.props.stage} - {this.props.name}
      </div>
    )
  }
}

// 高阶组件链式调用
// const NewLesson = withLog(hocComponent(withLog(Lesson)));

export class Hoc extends React.Component {
  render () {
    return (
      <div>
        {/* <NewLesson stage="React"></NewLesson> */}
        <Lesson stage="React"></Lesson>
      </div>
    )
  }
}