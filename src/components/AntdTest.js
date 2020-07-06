import React from 'react'
import { Button } from 'antd'
import 'antd/dist/antd.css';

export class AntdTest extends React.Component {
  render () {
    return (
      <div>
        <Button type="primary">antd按钮</Button>
      </div>
    )
  }
}