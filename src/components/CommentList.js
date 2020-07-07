import React from 'react'

export class CommentList extends React.Component {
  constructor(props) {
    console.log('CommentList constructor')
    super(props)
    this.state = {
      comments: []
    }
  }

  componentDidMount () {
    setTimeout(() => {
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
    console.log('CommentList render')
    return (
      <div>
        {this.state.comments.map((c, i) => (
          <Comment key={i} data={c}></Comment>
        ))}
      </div>
    )
  }
}

class Comment extends React.Component {
  render () {
    // 打印2次render
    // 首次加载组件执行一次，当父组件componentDidMount中修改comments，父组件state发生变化又执行一次
    // console.log('Comment render')
    return (
      <div>
        <p>{this.props.data.body}</p>
        <p>-- {this.props.data.author}</p>
      </div>
    )
  }
}