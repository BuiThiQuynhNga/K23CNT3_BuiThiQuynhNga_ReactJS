import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Sử dụng navigate để điều hướng
import axios from 'axios';

export default function BtqnEditUser() {
  const { id } = useParams(); // Lấy ID người dùng từ URL
  const [user, setUser] = useState(null); // Để lưu trữ dữ liệu người dùng
  const [loading, setLoading] = useState(true); // Trạng thái loading
  const [error, setError] = useState(null); // Lỗi khi lấy dữ liệu
  const navigate = useNavigate(); // Để điều hướng người dùng sau khi lưu

  // Lấy dữ liệu người dùng theo ID
  useEffect(() => {
    axios
      .get(`https://67daac2335c87309f52d8372.mockapi.io/k23cnt3_buithiquynhnga/btqn_users/${id}`)
      .then((response) => {
        setUser(response.data); // Lưu dữ liệu vào state
        setLoading(false); // Đánh dấu đã hoàn tất tải dữ liệu
      })
      .catch((error) => {
        setLoading(false); // Đánh dấu đã hoàn tất tải dù có lỗi
        setError('Có lỗi khi lấy dữ liệu người dùng!'); // Hiển thị lỗi
        console.error("Có lỗi khi lấy dữ liệu người dùng!", error); // Xử lý lỗi
      });
  }, [id]);

  // Xử lý khi người dùng gửi form để cập nhật dữ liệu
  const btqnHandleSubmit = (e) => {
    e.preventDefault(); // Ngừng hành vi gửi form mặc định

    // Gửi dữ liệu người dùng đã cập nhật đến API
    axios
      .put(`https://67daac2335c87309f52d8372.mockapi.io/k23cnt3_buithiquynhnga/btqn_users/${id}`, user)
      .then(() => {
        alert("Cập nhật thành công!"); // Thông báo khi cập nhật thành công
        navigate('/list-user'); // Điều hướng về danh sách người dùng
      })
      .catch((error) => {
        console.error("Lỗi khi lưu thay đổi", error); // Xử lý lỗi
        alert('Có lỗi xảy ra khi cập nhật, vui lòng thử lại.');
      });
  };

  // Render form để chỉnh sửa dữ liệu người dùng
  if (loading) {
    return <div className="container mt-5"><p>Loading user data...</p></div>;
  }

  if (error) {
    return <div className="container mt-5"><p className="text-danger">{error}</p></div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Edit User</h2>
      {user && (
        <form onSubmit={btqnHandleSubmit} className="p-5 border rounded-3 shadow-lg">
          <div className="mb-3">
            <label htmlFor="btqn_Name" className="form-label">Name</label>
            <input
              type="text"
              id="btqn_Name"
              className="form-control"
              value={user.btqn_Name}
              onChange={(e) => setUser({ ...user, btqn_Name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="btqn_Email" className="form-label">Email</label>
            <input
              type="email"
              id="btqn_Email"
              className="form-control"
              value={user.btqn_Email}
              onChange={(e) => setUser({ ...user, btqn_Email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="btqn_Phone" className="form-label">Phone</label>
            <input
              type="text"
              id="btqn_Phone"
              className="form-control"
              value={user.btqn_Phone}
              onChange={(e) => setUser({ ...user, btqn_Phone: e.target.value })}
            />
          </div>

          {/* Radio buttons for Active */}
          <div className="mb-3">
            <label className="form-label">Active</label>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name="btqn_Active"
                id="btqn_Active_hd"
                value="true"
                checked={user.btqn_Active === true}
                onChange={() => setUser({ ...user, btqn_Active: true })}
              />
              <label className="form-check-label" htmlFor="btqn_Active_hd">
                Hoạt Động
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name="btqn_Active"
                id="btqn_Active_kh"
                value="false"
                checked={user.btqn_Active === false}
                onChange={() => setUser({ ...user, btqn_Active: false })}
              />
              <label className="form-check-label" htmlFor="btqn_Active_kh">
                Khóa
              </label>
            </div>
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary btn-lg">Save Changes</button>
          </div>
        </form>
      )}

      <div className="d-flex justify-content-center mt-4">
        <button onClick={() => navigate('/list-user')} className="btn btn-secondary">
          Back to List
        </button>
      </div>
    </div>
  );
}
