import React from 'react'

function Lesson (props) {
  return (
    <div>{props.stage} - {props.name}</div>
  )
}

const hocComponent = Comp => {
  // 获取name
  let name = "hoc"

  // 扩展组件的同时要带上父组件传递的数据，展开props进行传递
  // return props => <Comp {...props} name={name}></Comp>

  return class extends React.Component {
    componentDidMount () {
      console.log('do')
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

// 高阶组件链式调用
const NewLesson = withLog(hocComponent(withLog(Lesson)));

export class Hoc extends React.Component {
  render () {
    return (
      <div>
        <NewLesson stage="React"></NewLesson>
      </div>
    )
  }
}