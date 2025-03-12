import React, { useState } from "react";

const BtqnMemberList = ({ members, removeMember, updateMember }) => {
  const [editMember, setEditMember] = useState(null);
  const [updatedInfo, setUpdatedInfo] = useState({ btqnfullname: "", btqnusername: "", btqnpassword: "" });
//hàm chỉnh sửa thông tin
  const handleEdit = (member) => {
    setEditMember(member.btqnid);
    setUpdatedInfo({ btqnfullname: member.btqnfullname, btqnusername: member.btqnusername, btqnpassword: member.btqnpassword });
  };
//lưu thông tin sau khi chỉnh sửa
  const handleUpdate = () => {
    updateMember({ btqnid: editMember, ...updatedInfo });
    setEditMember(null);
  };

  return (
    <div className="card p-3 mt-3">
      <h2 className="text-secondary">Account List📜</h2>
      <ul className="list-group">
        {members.map((member) => (
           <li key={member.btqnid} className="list-group-item d-flex justify-content-between align-items-center">
            {editMember === member.btqnid ? (
              //Hiển thị form nếu đang chỉnh sửa
              <>
                <input type="text" className="form-control me-2" value={updatedInfo.btqnfullname} onChange={(e) => setUpdatedInfo({ ...updatedInfo, btqnfullname: e.target.value })} />
                <input type="text" className="form-control me-2" value={updatedInfo.btqnusername} onChange={(e) => setUpdatedInfo({ ...updatedInfo, btqnusername: e.target.value })} />
                <input type="password" className="form-control me-2" value={updatedInfo.btqnpassword} onChange={(e) => setUpdatedInfo({ ...updatedInfo, btqnpassword: e.target.value })} />
                <button className="btn btn-success" onClick={handleUpdate}>Save</button>
              </>
            ) : (
              //hiển thị thông tiên nếu không chỉnh sửa
              <>
                {member.btqnfullname} ({member.btqnusername})
                <div className="d-flex gap-1">
                <button className="btn btn-warning me-2" onClick={() => handleEdit(member)}>🔧Fix</button>
                <button className="btn btn-danger" onClick={() => removeMember(member.btqnid)}>🗑️Detele</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BtqnMemberList;