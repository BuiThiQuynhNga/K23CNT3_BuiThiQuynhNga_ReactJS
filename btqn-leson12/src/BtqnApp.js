import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BtqnNavNar from './components/BtqnNavNar';
import BtqnHome from './components/BtqnHome';
import BtqnAbout from './components/BtqnAbout';
import BtqnContact from './components/BtqnContact';
import BtqnListUser from './components/BtqnListUser';
import BtqnFormUser from './components/BtqnFormUser';

export default function BtqnApp() {

  const listUsers  = [
    {id:"SV001", btqnFullName:"Bùi Thị Quỳnh Nga", btqnUserName:"QuynhNga", btqnPass:"15082005@"},
    {id:"SV002", btqnFullName:"Bùi Thị Vân Anh", btqnUserName:"Vanh", btqnPass:"06122002@"},
    {id:"SV003", btqnFullName:"Nguyễn Như Nguyệt", btqnUserName:"NguyetNguyet", btqnPass:"123456a@"},
  ];

  const [btqnUsers, setBtqnUsers] = useState(listUsers);

  // Hàm xử lý sự kiện thêm mới
  const btqnHandleAdd = (btqnParam) => {
    console.log("btqnHandleAdd:", btqnParam);
    
    setBtqnUsers(prev => { 
      return [
        ...prev,
        btqnParam
      ];
    });
  };

  return (
    <div className='container border my-3'>
        <h1>React Router Dom - Demo - [Bùi Thị Quỳnh Nga -K23CNT3]</h1>
        <hr/>
        <Router>
            <BtqnNavNar />
            <Routes>
                <Route path='/' element={<BtqnHome />} />
                <Route path='/about' element={<BtqnAbout />} />
                <Route path='/contact' element={<BtqnContact />} />
                <Route path='/list-user' element={<BtqnListUser renderBtqnUsers={btqnUsers} />} />
                <Route path='/create-user' element={<BtqnFormUser onBtqnAddNew={btqnHandleAdd} />} />
            </Routes>
        </Router>
    </div>
  );
}
