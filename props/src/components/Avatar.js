import React from 'react'
import utils from './utils'
import getImageUrl from './utils'

export default function Avatar({person,size}) {
  return (
    <img
    className='avatar'
    src={getImageUrl(person)}
    alt={person.name}
    width={size}
    height={size}
    />
  )
}
