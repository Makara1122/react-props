import React from 'react'
import utils from './utils'
import App5 from './App5'
import getImageUrl from './GetUrl'
export default function Avatar({person, size}) {
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
