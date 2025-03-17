import React, { useState } from 'react';

export default function BtqnFormUser({ onBtqnAddNew }) {

    const [id, setBtqnId] = useState('');
    const [btqnFullName, setBtqnFullName] = useState('');
    const [btqnUserName, setBtqnUserName] = useState('');
    const [btqnPass, setBtqnPass] = useState('');

    const btqnHandleSubmit = (event) => {
        event.preventDefault();
        console.log(id, btqnFullName, btqnUserName, btqnPass);

        // Gọi hàm onBtqnAddNew để thêm người dùng mới
        onBtqnAddNew({ id, btqnFullName, btqnUserName, btqnPass });
    }

    return (
        <div>
            <form onSubmit={btqnHandleSubmit}>
                <p>Mã sinh viên:
                    <input type='text' name='id' value={id} onChange={(ev) => setBtqnId(ev.target.value)} />
                </p>
                <p>Họ và tên:
                    <input type='text' name='btqnFullName' value={btqnFullName} onChange={(ev) => setBtqnFullName(ev.target.value)} />
                </p>
                <p>Tài khoản:
                    <input type='text' name='btqnUserName' value={btqnUserName} onChange={(ev) => setBtqnUserName(ev.target.value)} />
                </p>
                <p>Mật khẩu:
                    <input type='password' name='btqnPass' value={btqnPass} onChange={(ev) => setBtqnPass(ev.target.value)} />
                </p>

                <p>
                    <button type='submit' name='btqnSave'>Save</button>
                </p>
            </form>
        </div>
    );
}
