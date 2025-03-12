import React, { useState } from "react";

const BtqnProductAdd = ({ addProduct }) => {
    //lưu thông tin thành viên mới
  const [newProduct, setNewProduct] = useState({ btqnbtqnid: "", btqnbtqnfullname: "", btqnbtqnusername: "", btqnbtqnpassword: "" });
  //hàm xử lý thay đổi gía trị input
  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
//hàm xử lý khi gửi form thêm tv
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newProduct.btqnid && newProduct.btqnfullname && newProduct.btqnusername && newProduct.btqnpassword) {
      addProduct(newProduct);
      setNewProduct({ btqnid: "", btqnfullname: "", btqnusername: "", btqnpassword: "" });
    }
  };

  return (
    <div className="card p-3 mt-3">
      <h2>Add Product📝</h2>
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input type="text" className="form-control" name="btqnid" placeholder="ID" value={newProduct.btqnid} onChange={handleChange} required />
        <input type="text" className="form-control" name="btqnfullname" placeholder="Họ và tên" value={newProduct.btqnfullname} onChange={handleChange} required />
        <input type="text" className="form-control" name="btqnusername" placeholder="Username" value={newProduct.btqnusername} onChange={handleChange} required />
        <input type="btqnpassword" className="form-control" name="btqnpassword" placeholder="Mật khẩu" value={newProduct.btqnpassword} onChange={handleChange} required />
        <button type="submit" className="btn btn-primary" >➕More</button>
      </form>
    </div>
  );
};

export default BtqnProductAdd;