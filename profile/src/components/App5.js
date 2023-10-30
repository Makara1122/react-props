import React from 'react'
import utils from './utils'
function Card({children}){
    return (
        <div className='card'>
            {children}
        </div>
    )
}

export default function App5() {
  return (
    <Card>
        <App5
        size = {100}
        person = {
            {name: 'Katsuko Saruhashi',
            imageId: 'YfeOqp2' }
        }
        />
    </Card>
  )
}
