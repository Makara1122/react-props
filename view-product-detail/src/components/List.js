import React from 'react'
import ReactDom from 'react-dom/client';

 function List(props) {
  return <li>I am {props.name} how are you?</li>
}

export default function ListChildComponent() {
    const names = ['Mam makara', 'Kim chansokpeng','Torn seivla'];
    return (
        <>
        <h1>Who live in my list</h1>
        <ul>
            {names.map((name) => <List name={name}/>)}
        </ul>
        </>
    )
}
