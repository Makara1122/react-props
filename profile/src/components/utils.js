import React from 'react'

export default function utils(person,size ='50') {
  return (
    'https://i.imgur.com' +
    person.imageId +
    size + 
    '.jpg'
  )
}
