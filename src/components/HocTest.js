import React, {useState} from 'react';

export default function HocTest () {

  // 数组解构出useState调用的返回值，第一个值表示状态，第二个值是个方法，用于操作状态
  // useState(initialState)
  const [count, setCount] = useState(0)

  const [age] = useState(20)
  const [fruit, setFruit] = useState('Lemon')
  const [input, setInput] = useState('')
  const [fruits, setFruits] = useState(['apple', 'pear'])

  return (
      <div>
        <p>点击了{count}</p>
        <button onClick={() => setCount(count + 1)}>点击</button>

        <p>年龄：{age}</p>
        <p>选择的水果：{fruit}</p>

        <p>
          <input type="text" value={input} onChange={(e) => {setInput(e.target.value)}}></input>
          <button onClick={() => {setFruits([...fruits, input])}}>新增水果</button>
        </p>

        <ul>
          {fruits.map(fruit => (<li key={fruit} onClick={() => setFruit(fruit)}>{fruit}</li>))}
        </ul>
      </div>
  )
} 