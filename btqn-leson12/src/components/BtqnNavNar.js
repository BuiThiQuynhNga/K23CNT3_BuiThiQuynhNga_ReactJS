import React from 'react';
import { Link } from 'react-router-dom';

export default function BtqnNavNar() {
  return (
    <div>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ display: 'inline', marginRight: '10px' }}>
                <Link to={"/"}>Home</Link>
            </li>
            <li style={{ display: 'inline', marginRight: '10px' }}>
                <Link to={"/about"}>About Us</Link>
            </li>
            <li style={{ display: 'inline', marginRight: '10px' }}>
                <Link to={"/contact"}>Contact</Link>
            </li>
            <li style={{ display: 'inline', marginRight: '10px' }}>
                <Link to={"/list-user"}>List User</Link>
            </li>
            <li style={{ display: 'inline', marginRight: '10px' }}>
                <Link to={"/create-user"}>Create User</Link>
            </li>
        </ul>
    </div>
  );
}
