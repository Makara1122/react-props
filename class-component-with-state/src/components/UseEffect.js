import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{setCount((count)=>count +1);},1000);
    },[]);



  return (
    <div>
        <h1>I have rendered {count} times</h1>
    </div>
  )
}
