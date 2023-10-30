import React from 'react'

export default function PropsPassOneTowOther() {
  return (
    <>
    <ChildComponent name = 'Mam Makara' userId = '5'/>
    <h2>How are you to day boy</h2>
    </>
  )
}

 function ChildComponent(props) {
    console.log(props);
    return(
        <>
        <h2>this is {props.name} and his id {props.userId}</h2>
        </>
    )
}


