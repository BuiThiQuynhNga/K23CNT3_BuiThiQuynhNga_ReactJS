import React from 'react';

export default function BtqnListUser({ renderBtqnUsers }) {

    const BtqnElements = renderBtqnUsers.map((BtqnItem, index) => {
        return (
            <tr key={index}> 
                <td>{index + 1}</td>
                <td>{BtqnItem.id}</td>
                <td>{BtqnItem.btqnFullName}</td>
                <td>{BtqnItem.btqnUserName}</td>
                <td>{BtqnItem.btqnPass}</td>
            </tr>
        );
    });

    return (
        <div>
            <h2>Danh sách tài khoản</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>FullName</th>
                        <th>UserName</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {BtqnElements}
                </tbody>
            </table>
        </div>
    );
}
