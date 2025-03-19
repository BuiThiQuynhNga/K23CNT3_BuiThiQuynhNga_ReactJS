import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function BtqnCreateUser() {
    // Khởi tạo state
    const [btqn_Name, setBtqn_Name] = useState("");
    const [btqn_Email, setBtqn_Email] = useState("");
    const [btqn_Phone, setBtqn_Phone] = useState("");
    const [btqn_Active, setBtqn_Active] = useState(true);
    const [loading, setLoading] = useState(false); // Trạng thái đang gửi
    const [errorMessage, setErrorMessage] = useState(""); // Lưu thông báo lỗi

    // API POST
    const btqnCreateUser = 'https://67daac2335c87309f52d8372.mockapi.io/k23cnt3_buithiquynhnga/btqn_users';
    
    // Submit form
    const btqnHandleSubmit = (ev) => {
        ev.preventDefault(); // Ngăn form gửi tự động
        setLoading(true); // Bật trạng thái loading khi gửi form
        setErrorMessage(""); // Reset lỗi trước khi gửi yêu cầu mới

        let btqnNewUser = { btqn_Name, btqn_Email, btqn_Phone, btqn_Active };

        // Gửi dữ liệu lên API
        axios
            .post(btqnCreateUser, btqnNewUser)
            .then((btqn_response) => {
                setLoading(false); // Tắt loading khi đã có phản hồi từ API
                console.log(btqn_response.data);
                alert("Thêm mới thành công!");
            })
            .catch((error) => {
                setLoading(false); // Tắt loading nếu có lỗi
                setErrorMessage("Lỗi xảy ra, vui lòng thử lại sau!"); // Cập nhật lỗi cho người dùng
                console.error("Lỗi:", error);
            });
    };

    return (
        <div className="container mt-4">
            <form onSubmit={btqnHandleSubmit}>
                <h2>Thêm Mới User</h2>

                {/* Nhập Name */}
                <div className="mb-3">
                    <label htmlFor="btqn_name" className="form-label">Name</label>
                    <input
                        type="text"
                        name="btqn_Name"
                        id="btqn_name"
                        placeholder="Vui lòng nhập tên của bạn"
                        className="form-control"
                        onChange={(ev) => setBtqn_Name(ev.target.value)}
                        value={btqn_Name}
                        required
                    />
                </div>

                {/* Nhập Email */}
                <div className="mb-3">
                    <label htmlFor="btqn_email" className="form-label">Email</label>
                    <input
                        type="email"
                        name="btqn_Email"
                        id="btqn_email"
                        placeholder="Vui lòng nhập email của bạn"
                        className="form-control"
                        onChange={(ev) => setBtqn_Email(ev.target.value)}
                        value={btqn_Email}
                        required
                    />
                </div>

                {/* Nhập Phone */}
                <div className="mb-3">
                    <label htmlFor="btqn_phone" className="form-label">Phone</label>
                    <input
                        type="text"
                        name="btqn_Phone"
                        id="btqn_phone"
                        placeholder="Vui lòng nhập số điện thoại của bạn"
                        className="form-control"
                        onChange={(ev) => setBtqn_Phone(ev.target.value)}
                        value={btqn_Phone}
                        required
                    />
                </div>

                {/* Trạng thái Active */}
                <div className="mb-3">
                    <label className="form-label">Active</label>
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="btqn_Active"
                            id="btqn_active_hd"
                            value="true"
                            checked={btqn_Active === true}
                            onChange={() => setBtqn_Active(true)}
                        />
                        <label className="form-check-label" htmlFor="btqn_active_hd">Hoạt Động</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="btqn_Active"
                            id="btqn_active_kh"
                            value="false"
                            checked={btqn_Active === false}
                            onChange={() => setBtqn_Active(false)}
                        />
                        <label className="form-check-label" htmlFor="btqn_active_kh">Khóa</label>
                    </div>
                </div>

                {/* Hiển thị thông báo lỗi */}
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

                {/* Nút Submit */}
                <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Đang tạo..." : "Create"}
                </button>

                {/* Nút quay lại danh sách */}
                <Link to="/list-user" className="btn btn-info ms-2">
                    Back
                </Link>
            </form>
        </div>
    );
}
