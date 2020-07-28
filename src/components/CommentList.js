import React from 'react'

export class CommentList extends React.Component {
  constructor(props) {
    // console.log('CommentList constructor')
    super(props)
    this.state = {
      comments: [],
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
    // setTimeout(() => {
    //   this.setState({
    //     comments: [
    //       {body: 'react is very good', author: 'facebook'},
    //       {body: 'vue is very good', author: 'youyuxi'}
    //     ]
    //   })
    // }, 1000)
  }

  render () {
    // console.log('CommentList render')
    return (
      <div>
        {this.state.comments.map((c, i) => (
          // 这里扩展相当于： <Comment key={i} body={c.body} author={c.author}></Comment>
          <Comment key={i} {...c}></Comment>
        ))}
        {/* {this.props.title} */}
        {/* {this.state.comments.map((c, i) => (
          <Comment key={i} data={c}></Comment>
        ))} */}
      </div>
    )
  }
}

// class Comment extends React.Component {
//   render () {
//     console.log('Comment render')
//     return (
//       <div>
//         <p>{this.props.data.body}</p>
//         <p>-- {this.props.data.author}</p>
//       </div>
//     )
//   }
// }

// 避免组件频繁更新1 - shouldComponentUpdate
// 该方法较为繁琐，也不太可能对比状态的每一个属性
// class Comment extends React.Component {

//   shouldComponentUpdate (nextProps) {
//     // nextProps是接下来的新状态，被改变之后的状态
//     // 在shouldComponentUpdate生命周期内对比改变之后的状态与之前额状态是否一致
//     if(nextProps.data.body === this.props.data.body &&
//       nextProps.data.author === this.props.data.author) {
//         return false;
//     }
//     return true;
//   }

//   render () {
//     // 打印4次
//     console.log('Comment render')
//     return (
//       <div>
//         <p>{this.props.data.body}</p>
//         <p>-- {this.props.data.author}</p>
//       </div>
//     )
//   }
// }

// 避免组件频繁更新2 - PureComponent 
// 更换继承类为PureComponent，PureComponent内置shouldComponentUpdate并对shouldComponentUpdate做了一定扩展
// 只做浅比较，不会递归比较属性，在对比对象的时候只会比较对象的引用，或者只比较最外层属性
// 所以在使用PureComponent是尽量避免对象类型数据，尽可能只用在值类型数据，或者使用一层属性的对象
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

// 避免组件频繁更新3 - React.memo v16.6.0后的版本才有
// memo是一个高阶组件，是一个函数，接收一个组件返回一个新组件
// 类似PureComponent只做浅比较，解决了函数型组件没有PureComponent功能的问题
const Comment = React.memo(function (props) {
  // 打印2次
  console.log('Comment render')
  return (
    <div>
      <p>{props.body}</p>
      <p>-- {props.author}</p>
    </div>
  )
})