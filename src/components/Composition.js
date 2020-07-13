import React from 'react'

// Dialog作为容器不关心内容和逻辑，只负责提供外层样式
// 插入的内容{props.children}可理解为vue中的slot
function Dialog (props) {
  return (  
    <div style={{ border: `4px solid ${props.color || 'red'}` }}>
      {props.children}
    </div>
  )
}


// WelcomeDialog组件通过复合提供内容
function WelcomeDialog () {
  return (
    <Dialog>
      <h1>welcome</h1>
      <p>感谢使用</p>
    </Dialog>
  )
}

export default function () {
  return <WelcomeDialog></WelcomeDialog>
}