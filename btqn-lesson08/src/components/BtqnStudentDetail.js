import React from 'react';

const BtqnStudentDetail = ({ student, onClose }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Thông tin chi tiết</h3>
        <p><strong>Mã sinh viên:</strong> {student.btqnID}</p>
        <p><strong>Họ tên:</strong> {student.btqnStudentName}</p>
        <p><strong>Tuổi:</strong> {student.btqnAge}</p>
        <p><strong>Giới tính:</strong> {student.btqnGender}</p>
        <p><strong>Ngày sinh:</strong> {student.btqnBirthday}</p>
        <p><strong>Nơi sinh:</strong> {student.btqnBirthPlace}</p>
        <p><strong>Địa chỉ:</strong> {student.btqnAddress}</p>
        <button className="btn btn-secondary" onClick={onClose}>Đóng</button>
      </div>
    </div>
  );
};

export default BtqnStudentDetail;