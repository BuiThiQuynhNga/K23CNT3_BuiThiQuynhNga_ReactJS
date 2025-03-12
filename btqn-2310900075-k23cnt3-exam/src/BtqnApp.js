import React, { useState } from "react";
import BtqnProductList from "./components/BtqnProductList";
import BtqnProductAdd from "./components/BtqnProductAdd";



const BtqnApp = () => {
  //khởi tạo thành viên
  const [products, setProducts] = useState([
    { btqnid: "2310900075", btqnfullname: "Bùi Thị Quỳnh Nga", btqnusername: "Nga", btqnpassword: "15/08/2005" },
    { btqnid: "23109000", btqnfullname: "Nguyễn Văn Huy", btqnusername: "Huy", btqnpassword: "55555" },
    { btqnid: "230009000", btqnfullname: "Ngô Thị Lan ", btqnusername: "Lan", btqnpassword: "09090" },
  ]);
//thêm mới
  const addProduct = (product) => {
    setProducts([...products, product]);
  };
    // Hàm xóa thành viên theo ID
    const removeProduct = (btqnid) => {
      setProducts(products.filter(product => product.btqnid !== btqnid));
  };

  // Hàm cập nhật thông tin thành viên
  const updateProduct = (updatedProduct) => {
    setProducts(products.map(product => (product.btqnid === updatedProduct.btqnid ? updatedProduct : product)));
  };


  return (
    <div className="container mt-4">
      <h1 className="text-primary">📈CUSTOMER LIST📉</h1>
      <BtqnProductList products={products} removeProduct={removeProduct} updateProduct={updateProduct}/>
      <BtqnProductAdd addProduct={addProduct}/>
      
    </div>
  );
};

export default BtqnApp;