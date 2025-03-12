import React, { useState } from "react";

const BtqnMemberAdd = ({ addMember }) => {
    //lưu thông tin thành viên mới
  const [newMember, setNewMember] = useState({ btqnbtqnid: "", btqnbtqnfullname: "", btqnbtqnusername: "", btqnbtqnpassword: "" });
  //hàm xử lý thay đổi gía trị input
  const handleChange = (e) => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
  };
//hàm xử lý khi gửi form thêm tv
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMember.btqnid && newMember.btqnfullname && newMember.btqnusername && newMember.btqnpassword) {
      addMember(newMember);
      setNewMember({ btqnid: "", btqnfullname: "", btqnusername: "", btqnpassword: "" });
    }
  };

  return (
    <div className="card p-3 mt-3">
      <h2>Add Member📝</h2>
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input type="text" className="form-control" name="btqnid" placeholder="ID" value={newMember.btqnid} onChange={handleChange} required />
        <input type="text" className="form-control" name="btqnfullname" placeholder="Họ và tên" value={newMember.btqnfullname} onChange={handleChange} required />
        <input type="text" className="form-control" name="btqnusername" placeholder="Username" value={newMember.btqnusername} onChange={handleChange} required />
        <input type="btqnpassword" className="form-control" name="btqnpassword" placeholder="Mật khẩu" value={newMember.btqnpassword} onChange={handleChange} required />
        <button type="submit" className="btn btn-primary" >➕More</button>
      </form>
    </div>
  );
};

export default BtqnMemberAdd;