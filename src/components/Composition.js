import React from 'react'

// Dialog作为容器不关心内容和逻辑，只负责提供外层样式
// 插入的内容{props.children}可理解为vue中的slot
// function Dialog (props) {
//   return (  
//     // 边框默认颜色为red，如果有配置则获取配置颜色
//     <div style={{ border: `4px solid ${props.color || 'red'}` }}>
//       {/* children是固定写法 */}
//       {props.children}
//       {/* 具名插槽 */}
//       <div className="footer">
//         {props.footer}
//       </div>
//     </div>
//     // <div style={{ border: "4px solid red"}}>
//     //   {/* children是固定写法 */}
//     //   {props.children}
//     // </div>
//   )
// }


// WelcomeDialog组件通过复合提供内容
// function WelcomeDialog (props) {
//   return (
//     <Dialog {...props}>
//       <h1>welcome</h1>
//       <p>感谢使用</p>
//     </Dialog>
//     // <Dialog>
//     //   <h1>welcome</h1>
//     //   <p>感谢使用</p>
//     // </Dialog>
//   )
// }

// const Api = {
//   getUser() {
//     return {name: 'asher', age: 3}
//   }
// }

// function Fetcher (props) {
//   let user = Api[props.name]();
//   return props.children(user)
// }

// function Filter (props) {
//   return (
//     <div>
//       {React.Children.map(props.children, child => {
//         if(child.type !== props.type) {
//           return;
//         }
//         // return过滤之后的数组
//         return child;
//       })}
//     </div>
//   )
// }

// 修改children
function RadioGroup (props) {
  return (
    <div>
      {/* RadioGroup遍历自己的children，并分别给他们加上相同的name属性 */}
      {React.Children.map(props.children, child => {
        // vdom不可更改，必须先clone一个再做更改
        // 不可以写成 child.props.name = props.name
        return React.cloneElement(child, {name:props.name})
      })}
    </div>
  )
}

function Radio ({children, ...rest}) {
  // 因为Radio组件中还有内容，所以要特别处理children
  // 将传进来的props分成2部分，分别是children和其他属性
  return (
    <label>
      <input type="radio" {...rest}></input>
      {children}
    </label>
  )
}

export default function () {
  // let footer = <button onClick={() => {alert('confirm')}}>this is footer</button>
  return (
    <div>
      {/* <WelcomeDialog color={'blue'}></WelcomeDialog> */}
      {/* <WelcomeDialog color={'blue'} footer={footer}></WelcomeDialog> */}

      {/* <Fetcher name="getUser"> 
        {({name, age}) => (
          <p>{name} - {age}</p>
        )}
      </Fetcher> */}

      {/* 过滤器 过滤出指定标签*/}
      {/* <Filter type="h5">
        <h5>re</h5>
        <h5>eae</h5>
        <p>this is p</p>
      </Filter> */}

      {/* RadioGroup组件内的Radio默认为一组，可实现单选，然后由RadioGroup将Radio应该有的相同的name属性分配出去 */}
      <RadioGroup name="mvvm">
        <Radio value="vue">vue</Radio>
        <Radio value="react">react</Radio>
        <Radio value="angular">angular</Radio>
      </RadioGroup>
    </div>
  )
}