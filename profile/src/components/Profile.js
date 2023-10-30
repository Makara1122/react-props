import React from 'react'

 function Profile() {
  return (
    <img
    src='https://th.bing.com/th?id=ORMS.e617ab42fb8a74354ec45aa498e9ecc3&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0'
    alt='Mam Makara'
    className= "avatar"
    />
  )
}

export default function Gallery() {
    return (
        <section>
            <h1>Amazing pictures</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    )
}