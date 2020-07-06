import React from 'react'

export class CommentList extends React.Component {
  constructor(props) {
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
  }

  render () {
    return (
      <div>
        {this.state.comments.map((c, i) => (
          <Comment key={i} data={c}></Comment>
        ))}
      </div>
    )
  }
}

function Comment ({data}) {
  return (
    <div>
      <p>{data.body}</p>
      <p>-- {data.author}</p>
    </div>
  )
}