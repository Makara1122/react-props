import React, { useState } from 'react'

export default function UseState() {

    const [count, setCount] = useState(0);
  return (
    <div>
        <h2>UseState: {count}</h2>
        <button
        onClick={()=> setCount(count + 1)}
        >
            Increment
        </button>
    </div>
  )
}
