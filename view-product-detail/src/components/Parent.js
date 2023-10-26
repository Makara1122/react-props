import React from 'react'
import Child from './Child'
export default function Parent() {
    const name = "Makara";
  return (
    <Child name={name}/>
  )
}
