import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function BtqnReadMockAPI() {
    // Khởi tạo state 
    const [btqnListUser, setBtqnListUser] = useState([])
    const [error, setError] = useState(null)

    // API
    const btqnApiOnline = "https://67d9649b00348dd3e2aae03c.mockapi.io/k23cnt3_buithiquynhnga/btqn_users"

    // Đọc dữ liệu từ API bằng axios
    useEffect(() => {
        axios
            .get(btqnApiOnline)
            .then((btqn_response) => {
                setBtqnListUser(btqn_response.data)
            })
            .catch((error) => {
                console.log("Lỗi phát sinh", error);
                setError("Không thể tải dữ liệu từ API");
            })
    }, [])

    // View data
    const btqnElementUser = btqnListUser.map((btqn_item, index) => {
        return (
            <tr key={btqn_item.btqnId}>  {/* Thêm key duy nhất cho mỗi phần tử */}
                <td>{btqn_item.btqnId}</td>
                <td>{btqn_item.btqnFullName}</td>
                <td>{btqn_item.btqnAge}</td>
                <td>{btqn_item.btqnActive ? 'Hoạt động' : 'Khóa'}</td>
                <td>
                    <button className="btn btn-warning btn-sm mx-1">Sửa</button>
                    <button className="btn btn-danger btn-sm mx-1">Xóa</button>
                </td>
            </tr>
        )
    })

    return (
        <div className='container mt-4'>
            <h2 className="text-center mb-4">Danh sách người dùng</h2>
            {/* Hiển thị lỗi nếu có */}
            {error && <div className="alert alert-danger text-center">{error}</div>}
            
            <div className="table-responsive">
                <table className='table table-striped table-bordered shadow-sm'>
                    <thead className="thead-dark">
                        <tr>
                            <th>Id</th>
                            <th>FullName</th>
                            <th>Age</th>
                            <th>Active</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {btqnElementUser.length > 0 ? (
                            btqnElementUser
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center">Không có dữ liệu</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
