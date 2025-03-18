import React from 'react'
import BtqnReadApiLocal from './components/BtqnReadApiLocal'
import BtqnReadMockAPI from './components/BtqnReadMockAPI'
import BtqnCreateMockAPI from './components/BtqnCreateMockAPI'

export default function BtqnApp() {
  return (
    <div className='container border my-3 p-3'>
        <h1> ReactJS - API - Bùi Thị Quỳnh Nga</h1>
        <hr/>
        <BtqnReadApiLocal />
        <hr/>
        <h2>Đọc dữ liệu từ MockAPi (mockapi.io)</h2>
        <BtqnReadMockAPI />

        <BtqnCreateMockAPI />
    </div>
  )
}