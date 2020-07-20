import React, {useState} from 'react';

export default function HookTest () {

  const [count, setCount] = useState(0)
  return (
    <div>
      <p>点击了{count}次</p>
      <button onClick={() => {setCount(count + 1)}}>点击</button>
    </div>
  )
}