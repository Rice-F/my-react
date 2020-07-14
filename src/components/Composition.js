import React from 'react'

// Dialog作为容器不关心内容和逻辑，只负责提供外层样式
// 插入的内容{props.children}可理解为vue中的slot
// function Dialog (props) {
//   return (  
//     <div style={{ border: `4px solid ${props.color || 'red'}` }}>
//       {/* children是固定写法 */}
//       {props.children}
//       {/* 具名插槽 */}
//       <div className="footer">
//         {props.footer}
//       </div>
//     </div>
//   )
// }


// WelcomeDialog组件通过复合提供内容
// function WelcomeDialog (props) {
//   return (
//     <Dialog {...props}>
//       <h1>welcome</h1>
//       <p>感谢使用</p>
//     </Dialog>
//   )
// }

const Api = {
  getUser() {
    return {name: 'asher', age: 3}
  }
}

function Fetcher (props) {
  let user = Api[props.name]();
  return props.children(user)
}

function Filter (props) {
  return (
    <div>
      {React.Children.map(props.children, child => {
        if(child.type !== props.type) {
          return;
        }
        return child;
      })}
    </div>
  )
}

export default function () {
  // let footer = <button onClick={() => {alert('confirm')}}>this is footer</button>
  return (
    <div>
      {/* <WelcomeDialog color={'blue'} footer={footer}></WelcomeDialog> */}

      <Fetcher name="getUser"> 
        {({name, age}) => (
          <p>{name} - {age}</p>
        )}
      </Fetcher>

      {/* 过滤器 */}
      <Filter type="h5">
        <h5>re</h5>
        <h5>eae</h5>
        <p>this is p</p>
      </Filter>
    </div>
  )
}