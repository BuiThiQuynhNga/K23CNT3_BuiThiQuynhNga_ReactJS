import React, { useState } from "react";
import BtqnMemberList from "./components/BtqnMemberList";
import BtqnMemberAdd from "./components/BtqnMemberAdd";



const BtqnApp = () => {
  //khởi tạo thành viên
  const [members, setMembers] = useState([
    { btqnid: "2310900075", btqnfullname: "Bùi Thị Quỳnh Nga", btqnusername: "Nga", btqnpassword: "15/08/2005" },
    { btqnid: "23109000", btqnfullname: "Nguyễn Văn Huy", btqnusername: "Huy", btqnpassword: "55555" },
    { btqnid: "230009000", btqnfullname: "Ngô Thị Lan ", btqnusername: "Lan", btqnpassword: "09090" },
  ]);
//thêm mới
  const addMember = (member) => {
    setMembers([...members, member]);
  };
    // Hàm xóa thành viên theo ID
    const removeMember = (btqnid) => {
      setMembers(members.filter(member => member.btqnid !== btqnid));
  };

  // Hàm cập nhật thông tin thành viên
  const updateMember = (updatedMember) => {
    setMembers(members.map(member => (member.btqnid === updatedMember.btqnid ? updatedMember : member)));
  };


  return (
    <div className="container mt-4">
      <h1 className="text-primary">📈CUSTOMER LIST📉</h1>
      <BtqnMemberList members={members} removeMember={removeMember} updateMember={updateMember}/>
      <BtqnMemberAdd addMember={addMember}/>
      
    </div>
  );
};

export default BtqnApp;