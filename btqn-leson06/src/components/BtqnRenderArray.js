import React from 'react'

export default function BtqnRenderArray() {

    const btqnNumbers = [10,20,30,40,50];
    const btqnElement = btqnNumbers.map((item)=>{
        return <li>{item}</li>
    })
  return (
    <div className='alert alert-success'>
        {btqnElement}
    </div>
  )
}