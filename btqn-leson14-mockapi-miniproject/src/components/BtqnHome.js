import React from 'react'; 

export default function BtqnHome() {
  // Các style có thể được tách ra ngoài để dễ quản lý hơn
  const imageStyles = {
    width: "90%",
    height: "auto",
    borderRadius: "15px", // Viền mềm mại cho hình ảnh
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)", // Thêm bóng đổ cho ảnh
    transition: "transform 0.5s ease, box-shadow 0.3s ease", // Hiệu ứng mượt mà cho hover
    imageRendering: "auto", // Giúp tăng độ sắc nét cho hình ảnh
  };

  const headingStyles = {
    fontSize: '3.5rem', // Tăng kích thước chữ tiêu đề
    fontWeight: 'bold',
    textShadow: '3px 3px 8px rgba(0, 0, 0, 0.3)', // Thêm bóng đổ mạnh cho chữ tiêu đề
    color: '#2d98da', // Màu sắc tiêu đề nổi bật hơn
  };

  const paragraphStyles = {
    fontSize: '1.5rem', // Kích thước chữ lớn hơn để dễ đọc
    fontWeight: '500',
    color: '#555', // Màu chữ dễ nhìn và hài hòa hơn
  };

  return (
    <div className="container text-center mt-5">
      <h2 className="text-primary mb-4" style={headingStyles}>Welcome to Home!</h2>
      
      <p className="lead text-info mb-4" style={paragraphStyles}>
        Explore our wide range of electronic and home appliances that suit all your needs. Stay updated with the latest trends!
      </p>

      <img 
        src="https://minhduongads.com/wp-content/uploads/2019/11/banner-minhduongads.jpg"
        alt="Điện tử - Da dụng"
        className="rounded-3 shadow-lg"
        style={imageStyles}
        loading="lazy" // Tải ảnh chỉ khi cần
        onMouseOver={(e) => {
          e.target.style.transform = "scale(1.1)";
          e.target.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)"; // Tăng bóng đổ khi hover
        }}
        onMouseOut={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.1)"; // Quay lại bóng đổ ban đầu
        }}
      />
    </div>
  );
}
