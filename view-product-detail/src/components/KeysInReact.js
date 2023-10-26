import React from 'react'

function Car(props){
    return <li>This is my car {props.branch} It so handsome !</li>
}

export default function KeysInReact() {

    const myArray = [
        {id: 1, branch :'BMW'},
        {id: 2, branch :'Toyota'},
        {id: 3, branch :'Ford'}
    ]

  return (
    <>
    <h1>This is your car</h1>
    <ul>
        {myArray.map((item) =><Car key={item.id} branch={item.branch}/>)}
    </ul>
    </>
  )
}
