import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function BtqnListUser() {
    const [btqnListUser, setBtqnListUser] = useState([]); // State để lưu danh sách người dùng
    const [loading, setLoading] = useState(true); // State để theo dõi trạng thái tải dữ liệu
    const [error, setError] = useState(null); // State để lưu thông báo lỗi

    // URL API lấy dữ liệu người dùng
    const btqnAPIOnline = "https://67daac2335c87309f52d8372.mockapi.io/k23cnt3_buithiquynhnga/btqn_users";

    // Lấy dữ liệu từ API bằng axios
    useEffect(() => {
        setLoading(true); // Bắt đầu trạng thái tải dữ liệu
        axios
            .get(btqnAPIOnline) // Lấy dữ liệu người dùng từ API
            .then((btqn_response) => {
                setBtqnListUser(btqn_response.data); // Lưu dữ liệu vào state
                setLoading(false); // Xong tải dữ liệu
            })
            .catch((error) => {
                setError('Có lỗi xảy ra khi tải dữ liệu!');
                setLoading(false); // Dừng trạng thái tải dữ liệu
            });
    }, []); // useEffect chỉ chạy một lần khi component được render lần đầu tiên

    // Hàm xử lý xóa người dùng
    const handleDelete = (id) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này?")) {
            axios
                .delete(`${btqnAPIOnline}/${id}`)
                .then(() => {
                    setBtqnListUser(prevList => prevList.filter(user => user.id !== id)); // Cập nhật lại danh sách sau khi xóa
                    alert('Xóa người dùng thành công!');
                })
                .catch((error) => {
                    console.error("Có lỗi khi xóa người dùng!", error); // Xử lý lỗi khi có sự cố
                    alert('Xảy ra lỗi khi xóa người dùng!');
                });
        }
    };

    // Duyệt qua danh sách người dùng và render từng người dùng trong một dòng của bảng
    const btqnElementUser = btqnListUser.map((btqnItem) => {
        return (
            <tr key={btqnItem.id} className="table-hover">
                <td>{btqnItem.id}</td> {/* Hiển thị ID người dùng */}
                <td>{btqnItem.btqn_Name}</td> {/* Hiển thị Tên người dùng */}
                <td>{btqnItem.btqn_Email}</td> {/* Hiển thị Email người dùng */}
                <td>{btqnItem.btqn_Phone}</td> {/* Hiển thị Số điện thoại người dùng */}
                <td>
                    {/* Hiển thị trạng thái hoạt động với badge */}
                    <span className={`badge ${btqnItem.btqn_Active ? 'bg-success' : 'bg-danger'}`}>
                        {btqnItem.btqn_Active ? 'Hoạt động' : 'Khóa'}
                    </span>
                </td>
                <td>
                    {/* Nút chỉnh sửa */}
                    <Link to={`/edit-user/${btqnItem.id}`}>
                        <button className="btn btn-warning btn-sm me-2">Edit</button>
                    </Link>
                    {/* Nút xóa */}
                    <button 
                        className="btn btn-danger btn-sm" 
                        onClick={() => handleDelete(btqnItem.id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    });

    return (
        <div className="container mt-4">
            <div className="alert alert-info">
                <h2>Danh sách người dùng</h2> {/* Tiêu đề */}
            </div>

            {/* Hiển thị lỗi nếu có */}
            {error && <div className="alert alert-danger">{error}</div>}

            {/* Hiển thị loading nếu đang tải dữ liệu */}
            {loading ? (
                <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <div className="table-responsive">
                    <table className="table table-bordered table-striped bg-white">
                        <thead className="table-light">
                            <tr>
                                <th>ID</th> {/* Cột ID */}
                                <th>Name</th> {/* Cột Tên */}
                                <th>Email</th> {/* Cột Email */}
                                <th>Phone</th> {/* Cột Phone */}
                                <th>Active</th> {/* Cột Trạng thái hoạt động */}
                                <th>Action</th> {/* Cột Hành động (Chỉnh sửa/Xóa) */}
                            </tr>
                        </thead>
                        <tbody>
                            {btqnElementUser} {/* Hiển thị danh sách người dùng */}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
