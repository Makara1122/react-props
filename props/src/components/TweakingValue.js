import React from 'react'
import getImageUrl from './utils2'

 function Avatar({person,size}) {
  return (
    <img 
    className='avatar'
    src={getImageUrl(person,size)}
    alt={person.name}
    width={size}
    height={size}
    />
  )
}

export default function Profile(){

    return(~
      <>
        <Avatar 
         size={10}
         person={{
            name: 'Katsuko Saruhashi', 
            imageId: 'YfeOqp2'
         }}
        />
        <Avatar 
        size={100}
        person={{
            name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
        />
      </>
    )
}
