import React, { useState } from 'react'
import axios from 'axios'

export default function BtqnCreateMockAPI() {
    // Khởi tạo state
    const [btqnFullName, setBtqnFullName] = useState('')
    const [btqnAge, setBtqnAge] = useState(0)
    const [btqnActive, setBtqnActive] = useState(true)
    const [error, setError] = useState(null)

    // API post
    const btqnCreateUserApi = "https://67d9649b00348dd3e2aae03c.mockapi.io/k23cnt3_buithiquynhnga/btqn_users";

    // Khi submit form
    const btqnHandleSubmit = (event) => {
        event.preventDefault();
        console.log("btqnActive:", btqnActive);
        let btqnNewUser = { btqnFullName, btqnAge, btqnActive };
        console.log(btqnNewUser);

        // Gửi dữ liệu vào API
        axios
            .post(btqnCreateUserApi, btqnNewUser)
            .then((btqn_response) => {
                alert("Thêm người dùng thành công!");
                // Reset form sau khi thêm
                setBtqnFullName('');
                setBtqnAge(0);
                setBtqnActive(true);
            })
            .catch((error) => {
                console.log("Lỗi phát sinh", error);
                setError("Có lỗi khi thêm người dùng. Vui lòng thử lại.");
            })
    }

    return (
        <div className='container mt-4'>
            <div className="alert alert-info">
                <h2 className="text-center">ADD USER</h2>
                <hr />
                {/* Hiển thị lỗi nếu có */}
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={btqnHandleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="btqnFullName" className="form-label">FullName</label>
                        <input
                            type="text"
                            name="btqnFullName"
                            id="btqnFullName"
                            className="form-control"
                            value={btqnFullName}
                            onChange={(ev) => setBtqnFullName(ev.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="btqnAge" className="form-label">Age</label>
                        <input
                            type="number"
                            name="btqnAge"
                            id="btqnAge"
                            className="form-control"
                            value={btqnAge}
                            onChange={(ev) => setBtqnAge(ev.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Active</label>
                        <div>
                            <input
                                type="radio"
                                name="btqnActive"
                                id="btqnActive_hd"
                                value={true}
                                checked={btqnActive === true}
                                onChange={() => setBtqnActive(true)}
                                className="form-check-input"
                            />
                            <label htmlFor="btqnActive_hd" className="form-check-label mx-2">Hoạt động</label>
                            <input
                                type="radio"
                                name="btqnActive"
                                id="btqnActive_kh"
                                value={false}
                                checked={btqnActive === false}
                                onChange={() => setBtqnActive(false)}
                                className="form-check-input"
                            />
                            <label htmlFor="btqnActive_kh" className="form-check-label mx-2">Khóa</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mt-3">Cretae User</button>
                </form>
            </div>
        </div>
    )
}
