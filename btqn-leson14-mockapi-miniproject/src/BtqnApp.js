import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BtqnHome from './components/BtqnHome';
import BtqnNavBar from './components/BtqnNavBar';
import BtqnListUser from './components/BtqnListUser';
import BtqnCreateUser from './components/BtqnCreateUser';
import BtqnEditUser from './components/BtqnEditUser';

export default function BtqnApp() {
  return (
    <div>
      <div className="container border my-3">
        <h1>ReactJs - MockAPI - MiniProject - [Bùi Thị Quỳnh Nga - K23CNT3]</h1>
        <hr />
        <Router>
          <BtqnNavBar />
          <Routes>
            <Route path="/" element={<BtqnHome />} />
            <Route path="/list-user" element={<BtqnListUser />} />
            <Route path="/create-user" element={<BtqnCreateUser />} />
            <Route path="/edit-user/:id" element={<BtqnEditUser />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}