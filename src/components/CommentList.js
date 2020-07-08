import React from 'react'

export class CommentList extends React.Component {
  constructor(props) {
    // console.log('CommentList constructor')
    super(props)
    this.state = {
      comments: [],
      tempData: '12345'
    }
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({
        comments: [
          {body: 'react is very good', author: 'facebook'},
          {body: 'vue is very good', author: 'youyuxi'}
        ]
      })
    }, 1000)
    // this.setState({
    //   comments: [
    //     {body: 'react is very good', author: 'facebook'},
    //     {body: 'vue is very good', author: 'youyuxi'}
    //   ]
    // })
  }

  render () {
    // console.log('CommentList render')
    return (
      <div>
        {this.state.comments.map((c, i) => (
          // 这里扩展相当于： <Comment key={i} body={c.body} author={c.author}></Comment>
          <Comment key={i} {...c}></Comment>
        ))}
      </div>
    )
  }
}

// 避免组件频繁更新1 - shouldComponentUpdate
class Comment extends React.Component {

  shouldComponentUpdate (nextProps) {
    if(nextProps.body === this.props.body &&
      nextProps.author === this.props.author) {
        return false;
    }
    return true;
  }

  render () {
    // 打印4次
    console.log('Comment render')
    return (
      <div>
        <p>{this.props.body}</p>
        <p>-- {this.props.author}</p>
      </div>
    )
  }
}

// 避免组件频繁更新2 - PureComponent 
// PureComponent内置shouldComponentUpdate只做浅比较
// 避免对象传值，对象传值yeoman特别留心引用的问题，尽量传数值类型的数据
// class Comment extends React.PureComponent {
//   render () {
//     // 打印4次
//     console.log('Comment render')
//     return (
//       <div>
//         <p>{this.props.body}</p>
//         <p>-- {this.props.author}</p>
//       </div>
//     )
//   }
// }

// 避免组件频繁更新3 - React.memo 
// 类似PureComponent只做浅比较
// const Comment = React.memo(function (props) {
//   // 打印2次
//   console.log('Comment render')
//   return (
//     <div>
//       <p>{props.body}</p>
//       <p>-- {props.author}</p>
//     </div>
//   )
// })