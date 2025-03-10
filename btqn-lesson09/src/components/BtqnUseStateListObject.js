import React, { useState } from "react";

const BtqnUseStateListObject = () => {
  const [students, setStudents] = useState([
    { id: "SV001", name: "Bùi Thị Quỳnh Nga", age: 20, class: "K23CNT3" },
    { id: "SV002", name: "Ngô Thị Diễm Lệ", age: 20, class: "K23CNT4" },
    { id: "SV003", name: "Huỳnh Thị Thùy Trang", age: 20, class: "K23CNT1" },
    { id: "SV004", name: "Hồ Quang Lâm", age: 20, class: "K23CNT3" }
  ]);

  return (
    <div>
      <h3>Danh sách sinh viên</h3>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Stt</th>
            <th>ID</th>
            <th>Tên SV</th>
            <th>Tuổi</th>
            <th>Lớp</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.class}</td>
              <td>
                <button>Sửa</button>
                <button>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BtqnUseStateListObject;