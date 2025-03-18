import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function BtqnReadApiLocal() {
    // Khởi tạo state
    const [btqnListUser, setBtqnListUser] = useState([])
    const [error, setError] = useState(null)

    // Đọc dữ liệu từ API local và set cho btqnListUser
    const apiUrl = "http://localhost:3001/users"

    useEffect(() => {
        axios
            .get(apiUrl)
            .then((btqnResponse) => {
                setBtqnListUser(btqnResponse.data)
            })
            .catch((error) => {
                console.log("Lỗi", error);
                setError("Không thể tải dữ liệu từ API.");
            })
    }, [])

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Danh sách người dùng</h2>
            {/* Hiển thị thông báo lỗi nếu có */}
            {error && <div className="alert alert-danger text-center">{error}</div>}
            
            <div className="table-responsive">
                <table className="table table-striped table-bordered shadow-sm">
                    <thead className="thead-dark">
                        <tr>
                            <th>FullName</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {btqnListUser.length > 0 ? (
                            btqnListUser.map((btqnItem, index) => {
                                return (
                                    <tr key={btqnItem.id}>
                                        <td>{btqnItem.fullName}</td>
                                        <td>{btqnItem.age}</td>
                                    </tr>
                                )
                            })
                        ) : (
                            <tr>
                                <td colSpan="2" className="text-center">Không có dữ liệu</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
