import React, {useState, useEffect} from 'react';

// 自定义hook是个函数，名称用use开头即可，函数内部可以调用其他hook
function useAge () {
  const [age, setAge] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setAge(20)
    }, 2000)
  })
  return age;
}

export default function HookTest () {

  // useState(initialState)是一个方法，该方法返回一个数组
  // 解构数组后第0项表示状态，我们初始化了这个状态值为0，第1项是更新状态值的方法 
  const [count, setCount] = useState(0)

  // 每次渲染时都执行
  // 可以理解为class类组件中的componentDidMount、componentDidUpdate、componentwillUnmount的合并api
  useEffect (() => {
    document.title =  `你点击了${count}次`
  })

  // useEffect会在每次组件都渲染时调用，那么如果需要在此方法内部调用api时，频繁调用api就不合理了
  // 这时可以给useEffect方法传递第二个参数，为[]
  useEffect (() => {
    // ...api调用
    console.log('api调用')
  }, [])

  // useEffect还可以根据依赖决定自身是否每次渲染都调用，如果依赖没有变，那渲染也是没有意义的
  // 这时给useEffect方法传递第二个参数，传依赖，依赖不变就不执行
  useEffect (() => {
    document.title =  `你点击了${count}次`
  }, [count])

  // const [age] = useState(20)
  const age = useAge()
  // 页面展示的选中水果
  const [fruit, setFruit] = useState('Lemon')
  // 输入框输入的内容，以及输入框onChange的操作
  const [input, setInput] = useState('')
  // 水果列表
  const [fruits, setFruits] = useState(['apple', 'pear'])

  return (
      <div>
        <p>点击了{count}次</p>
        <button onClick={() => setCount(count + 1)}>点击</button>

        <p>年龄：{age ? age : 'loading...'}</p>
        <p>选择的水果：{fruit}</p>

        <p>
          <input type="text" value={input} onChange={(e) => {setInput(e.target.value)}}></input>
          <button onClick={() => {setFruits([...fruits, input])}}>新增水果</button>
        </p>

        <ul>
          {/* 点击列表项，将列表项内容展示在上面的选择的水果。。。 */}
          {fruits.map(fruit => (<li key={fruit} onClick={() => setFruit(fruit)}>{fruit}</li>))}
        </ul>
      </div>
  )
} 