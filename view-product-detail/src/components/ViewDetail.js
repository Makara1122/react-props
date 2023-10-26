import React from 'react'

const ItemList = ({items})=>{
    return (
        <>
        <ul>
        {items.map((item)=>(
                        <li key={item.id}>{item.name}</li>
        ))}

        </ul>
        </>
    )
}

export default function ViewDetail() {
    const items = [{id:1,name:'Mam Makara'},
                    {id:2,name:'Mam Makara'},
                     {id:3,name:'Kim chansokpeng'}, 
                                             ]
  return (
    <>
    <h1>ItemList</h1>
    <ItemList items={items}/>

    </>
  )
}
