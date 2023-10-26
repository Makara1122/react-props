import React from 'react'

export default function ES6ArrayMethod() {
    const myArray = ['banana','apple','coconut'];
    const list = myArray.map((item) => <p>{item}</p>)
  return list;
}
