import React from 'react'
import BtqnUseState from './components/BtqnUseState'
import BtqnEffect1 from './components/BtqnEffect1'
import BtqnUseStateListObject from './components/BtqnUseStateListObject'

export default function BtqnApp() {
  return (
    <div className='container border my=t-3'>
      <h1> React Hook</h1>
      <hr/>
      <BtqnUseState/>
      <BtqnEffect1/>
      <BtqnUseStateListObject/>
    </div>
  )
}